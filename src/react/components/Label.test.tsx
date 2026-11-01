import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Label from './Label';

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('Label', () => {
  describe('empty', () => {
    it('should display nothing when no text or icon is defined', () => {
      const { container } = render(<Label />);

      expect(container.innerHTML).toBe('');
    });

    it('should not display a tooltip when no text or icon is defined', () => {
      render(<Label />);

      expect(screen.queryByRole('tooltip', { hidden: true })).toBeNull();
    });
  });

  describe('text', () => {
    it('should render the text when defined', () => {
      render(<Label text="Save" />);

      expect(screen.getByText('Save').dataset.slot).toBe('text');
    });

    it('should not set an aria-label when the text is visible', () => {
      const { container } = render(
        <Label text="Save" startIcon="search" endIcon="check" />
      );

      expect(container.querySelectorAll('[aria-label]')).toHaveLength(0);
    });

    it('should hide the start icon from screen readers when the text is visible', () => {
      render(<Label text="Save" startIcon="search" />);

      expect(screen.queryByRole('img')).toBeNull();
    });

    it('should hide the end icon from screen readers when the text is visible', () => {
      render(<Label text="Save" endIcon="check" />);

      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  describe('startIcon', () => {
    it('should render the start icon before the text', () => {
      const { container } = render(<Label text="Save" startIcon="search" />);

      expect(
        [...container.querySelectorAll<HTMLElement>('[data-slot]')].map(
          (element) => {
            return element.dataset.slot;
          }
        )
      ).toStrictEqual(['start-icon', 'text']);
    });
  });

  describe('endIcon', () => {
    it('should render the end icon after the text', () => {
      const { container } = render(<Label text="Save" endIcon="check" />);

      expect(
        [...container.querySelectorAll<HTMLElement>('[data-slot]')].map(
          (element) => {
            return element.dataset.slot;
          }
        )
      ).toStrictEqual(['text', 'end-icon']);
    });
  });

  describe('iconOnly', () => {
    it('should hide the text when a start icon is defined', () => {
      render(<Label text="Save" startIcon="search" iconOnly />);

      expect(
        screen.queryByText('Save', { selector: '[data-slot="text"]' })
      ).toBeNull();
    });

    it('should hide the text when an end icon is defined', () => {
      render(<Label text="Save" endIcon="check" iconOnly />);

      expect(
        screen.queryByText('Save', { selector: '[data-slot="text"]' })
      ).toBeNull();
    });

    it('should use the text as the start icon accessible name', () => {
      render(<Label text="Save" startIcon="search" iconOnly />);

      expect(screen.getByRole('img').getAttribute('aria-label')).toBe('Save');
    });

    it('should use the text as the end icon accessible name when there is no start icon', () => {
      render(<Label text="Save" endIcon="check" iconOnly />);

      expect(screen.getByRole('img').getAttribute('aria-label')).toBe('Save');
    });

    it('should use the start icon name as the accessible name when there is no text', () => {
      render(<Label startIcon="search" iconOnly />);

      expect(screen.getByRole('img').getAttribute('aria-label')).toBe('search');
    });

    it('should use the end icon name as the accessible name when there is no text or start icon', () => {
      render(<Label endIcon="check" iconOnly />);

      expect(screen.getByRole('img').getAttribute('aria-label')).toBe('check');
    });

    it('should read out both start and end icon accessible names when there is no text', () => {
      render(<Label startIcon="search" endIcon="check" iconOnly />);

      expect(
        screen.getAllByRole('img').map((icon) => {
          return icon.getAttribute('aria-label');
        })
      ).toStrictEqual(['search', 'check']);
    });

    it('should use the human-readable label and not the symbolic name as the accessible name', () => {
      render(<Label startIcon="external-link" iconOnly />);

      expect(screen.getByRole('img').getAttribute('aria-label')).toBe(
        'external link'
      );
    });

    it('should fall back to displaying the text when no icon is given and log a warning', () => {
      render(<Label text="Save" iconOnly />);

      expect({
        text: screen.getByText('Save').dataset.slot,
        warnings: vi.mocked(console.warn).mock.calls,
      }).toStrictEqual({
        text: 'text',
        warnings: [
          [
            '"Save" is set to iconOnly but has no icon, so its text is shown instead for accessibility.',
          ],
        ],
      });
    });
  });

  describe('tooltip', () => {
    it('should describe the label with a tooltip when the text is truncated', () => {
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

      const { container } = render(
        <Label text="A label that is too long to fit" />
      );

      expect(
        container.querySelector('.ves-label')?.getAttribute('aria-describedby')
      ).toBe(screen.getByRole('tooltip', { hidden: true }).id);
    });

    it('should not display the tooltip when the text fits', () => {
      render(<Label text="Save" />);

      expect(screen.queryByRole('tooltip', { hidden: true })).toBeNull();
    });

    it('should display the text in the tooltip when iconOnly is true', () => {
      render(<Label text="Save" startIcon="search" iconOnly />);

      expect(screen.getByRole('tooltip', { hidden: true }).textContent).toBe(
        'Save'
      );
    });
  });

  describe('warnings', () => {
    it('should warn when there is no text and no icon', () => {
      render(<Label />);

      expect(console.warn).toHaveBeenCalledWith(
        'Label has no text or icon to display.'
      );
    });

    it('should warn when iconOnly is set without an icon', () => {
      render(<Label text="Save" iconOnly />);

      expect(console.warn).toHaveBeenCalledWith(
        '"Save" is set to iconOnly but has no icon, so its text is shown instead for accessibility.'
      );
    });

    it('should not warn when only text is given', () => {
      render(<Label text="Save" />);

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('should not warn when only an icon is given', () => {
      render(<Label startIcon="search" />);

      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
