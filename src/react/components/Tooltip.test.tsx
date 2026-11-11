import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Tooltip from './Tooltip';

beforeEach(() => {
  HTMLElement.prototype.togglePopover = vi.fn(function (
    this: HTMLElement,
    force?: boolean | TogglePopoverOptions
  ) {
    const open =
      typeof force === 'boolean'
        ? force
        : !this.hasAttribute('data-popover-open');
    this.toggleAttribute('data-popover-open', open);
    return open;
  });
});

afterEach(() => {
  delete (HTMLElement.prototype as Partial<HTMLElement>).togglePopover;
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe('Tooltip', () => {
  describe('display', () => {
    it('should not display the tooltip when inner content is empty', () => {
      render(<Tooltip></Tooltip>);

      expect(
        screen.queryByRole('tooltip', { hidden: true })
      ).not.toBeInTheDocument();
    });

    it('should start hidden', () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should use the text content as the title when no title is given', () => {
      render(<Tooltip>Trigger text</Tooltip>);

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent(
        'Trigger text'
      );
    });

    it('should display the trigger element', () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      expect(screen.getByText('Trigger')).toHaveTextContent('Trigger');
    });

    it('should display the title in a tooltip element', () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent(
        'Tip'
      );
    });

    it('should set the tooltip role', () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      expect(screen.getByText('Tip')).toHaveAttribute('role', 'tooltip');
    });

    it('should describe the trigger with the tooltip', () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      expect(screen.getByText('Trigger')).toHaveAttribute(
        'aria-describedby',
        screen.getByRole('tooltip', { hidden: true }).id
      );
    });

    it('should not replace an existing aria-describedby on the trigger', () => {
      render(
        <Tooltip title="Tip" aria-describedby="hint">
          Trigger
        </Tooltip>
      );

      expect(screen.getByText('Trigger')).toHaveAttribute(
        'aria-describedby',
        `hint ${screen.getByRole('tooltip', { hidden: true }).id}`
      );
    });
  });

  describe('disabled', () => {
    it('should display only the trigger', () => {
      render(
        <Tooltip title="Tip" disabled>
          Trigger
        </Tooltip>
      );

      expect(
        screen.queryByRole('tooltip', { hidden: true })
      ).not.toBeInTheDocument();
    });

    it('should not describe the trigger', () => {
      render(
        <Tooltip title="Tip" disabled>
          Trigger
        </Tooltip>
      );

      expect(screen.getByText('Trigger')).not.toHaveAttribute(
        'aria-describedby'
      );
    });
  });

  describe('showOnlyWhenTruncated', () => {
    describe('false', () => {
      it('should hide the tooltip when the content is not truncated', () => {
        render(
          <Tooltip title="Tip" showOnlyWhenTruncated>
            Trigger
          </Tooltip>
        );

        expect(
          screen.queryByRole('tooltip', { hidden: true })
        ).not.toBeInTheDocument();
      });
    });

    describe('true', () => {
      beforeEach(() => {
        vi.stubGlobal(
          'ResizeObserver',
          class {
            callback: () => void;
            constructor(callback: () => void) {
              this.callback = callback;
            }
            observe() {
              this.callback();
            }
            disconnect() {}
          }
        );
        vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(
          200
        );
        vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(
          100
        );
      });

      it('should display the tooltip when the content is truncated', () => {
        render(
          <Tooltip
            title="This tooltip should be displayed in full"
            showOnlyWhenTruncated
          >
            Trigger
          </Tooltip>
        );

        expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent(
          'This tooltip should be displayed in full'
        );
      });

      it('should display the full content when text is derived from truncated content', () => {
        render(
          <Tooltip showOnlyWhenTruncated>
            Trigger text should be displayed in full
          </Tooltip>
        );

        expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent(
          'Trigger text should be displayed in full'
        );
      });
    });
  });

  describe('focus', () => {
    it('should make the trigger focusable when it has no focusable ancestor', () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      expect(screen.getByText('Trigger')).toHaveAttribute('tabindex', '0');
    });

    it('should not change the trigger tabIndex when it is already set', () => {
      render(
        <Tooltip title="Tip" tabIndex={-1}>
          Trigger
        </Tooltip>
      );

      expect(screen.getByText('Trigger')).toHaveAttribute('tabindex', '-1');
    });

    it('should not make the trigger focusable inside a focusable ancestor', () => {
      render(
        <button type="button">
          <Tooltip title="Tip">Trigger</Tooltip>
        </button>
      );

      expect(screen.getByText('Trigger')).not.toHaveAttribute('tabindex');
    });

    it('should show the tooltip on keyboard focus', async () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.tab();

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should show the tooltip when a focusable ancestor gets keyboard focus', async () => {
      render(
        <button type="button">
          <Tooltip title="Tip">Trigger</Tooltip>
        </button>
      );

      await userEvent.tab();

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should not show the tooltip on mouse focus', async () => {
      const matches = HTMLElement.prototype.matches;
      vi.spyOn(HTMLElement.prototype, 'matches').mockImplementation(function (
        this: HTMLElement,
        selector: string
      ) {
        return selector !== ':focus-visible' && matches.call(this, selector);
      });

      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.pointer({
        keys: '[MouseLeft]',
        target: screen.getByText('Trigger'),
      });

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should hide the tooltip on blur', async () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.tab();
      await userEvent.tab();

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });
  });

  describe('mouse', () => {
    it('should show the tooltip when the mouse enters the trigger', async () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.hover(screen.getByText('Trigger'));

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should keep the tooltip open while the mouse moves onto it', async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await user.hover(screen.getByText('Trigger'));
      await user.hover(screen.getByRole('tooltip', { hidden: true }));
      vi.advanceTimersByTime(200);

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should hide the tooltip after a delay when the mouse leaves', async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await user.hover(screen.getByText('Trigger'));
      await user.unhover(screen.getByText('Trigger'));
      vi.advanceTimersByTime(200);

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });
  });

  describe('touch', () => {
    it('should toggle the tooltip when the trigger is tapped', async () => {
      const matches = HTMLElement.prototype.matches;
      vi.spyOn(HTMLElement.prototype, 'matches').mockImplementation(function (
        this: HTMLElement,
        selector: string
      ) {
        return selector !== ':focus-visible' && matches.call(this, selector);
      });

      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.pointer({
        keys: '[TouchA]',
        target: screen.getByText('Trigger'),
      });

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should not toggle the tooltip on a mouse click', async () => {
      const matches = HTMLElement.prototype.matches;
      vi.spyOn(HTMLElement.prototype, 'matches').mockImplementation(function (
        this: HTMLElement,
        selector: string
      ) {
        return selector !== ':focus-visible' && matches.call(this, selector);
      });

      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.pointer({
        keys: '[MouseLeft]',
        target: screen.getByText('Trigger'),
      });

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });
  });

  describe('closing', () => {
    it('should hide the tooltip on Esc', async () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.hover(screen.getByText('Trigger'));
      await userEvent.keyboard('{Escape}');

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should hide the tooltip on a pointer down outside', async () => {
      render(
        <div>
          <p>Outside</p>
          <Tooltip title="Tip">Trigger</Tooltip>
        </div>
      );

      await userEvent.hover(screen.getByText('Trigger'));
      await userEvent.pointer({
        keys: '[MouseLeft>]',
        target: screen.getByText('Outside'),
      });

      expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should keep the tooltip open on a pointer down inside it', async () => {
      render(<Tooltip title="Tip">Trigger</Tooltip>);

      await userEvent.hover(screen.getByText('Trigger'));
      await userEvent.pointer({
        keys: '[MouseLeft>]',
        target: screen.getByRole('tooltip', { hidden: true }),
      });

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute(
        'data-popover-open'
      );
    });

    it('should remove listeners after unmount', async () => {
      const { unmount } = render(<Tooltip title="Tip">Trigger</Tooltip>);

      unmount();
      await userEvent.keyboard('{Escape}');

      expect(HTMLElement.prototype.togglePopover).not.toHaveBeenCalled();
    });
  });
});
