import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Link from './Link';

describe('Link', () => {
  describe('content', () => {
    it('should display the text when defined', () => {
      render(<Link href="/about" text="About" />);

      expect(screen.getByRole('link')).toHaveTextContent('About');
    });

    it('should display the start icon next to the text', () => {
      render(<Link href="/about" text="About" startIcon="info" />);

      expect(screen.getByRole('link').firstChild).toHaveClass(
        'ves-link__icon--start'
      );
    });

    it('should display its children when there is no text', () => {
      render(<Link href="/about">about page</Link>);

      expect(screen.getByRole('link')).toHaveTextContent('about page');
    });
  });

  describe('external links', () => {
    it('should open an http(s) URL in a new tab', () => {
      render(<Link href="https://open-ui.org/" text="Open UI" />);

      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('should display the external icon for an http(s) URL', () => {
      const { container } = render(
        <Link href="https://open-ui.org/" text="Open UI" />
      );

      expect(container.querySelector('.ves-link__icon')).toBeInTheDocument();
    });

    it('should open a relative URL in the same tab', () => {
      render(<Link href="/about" text="About" />);

      expect(screen.getByRole('link')).not.toHaveAttribute('target');
    });

    it('should treat a relative URL as external when external is set', () => {
      render(<Link href="/files/cv.pdf" text="CV" external />);

      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('should not display the external icon when showExternalIcon is false', () => {
      const { container } = render(
        <Link
          href="https://open-ui.org/"
          text="Open UI"
          showExternalIcon={false}
        />
      );

      expect(
        container.querySelector('.ves-link__icon')
      ).not.toBeInTheDocument();
    });
  });
});
