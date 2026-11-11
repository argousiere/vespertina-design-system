import { describe, expect, it } from 'vitest';
import { linkHtmlProcessor } from './markdown-link-processor';

describe('linkHtmlProcessor', () => {
  describe('classes and attributes', () => {
    it('should add the ves-link class to a link', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="/about">About</a>'
      );

      expect(document.querySelector('a')).toHaveClass('ves-link');
    });

    it('should keep the existing class of a link', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="/about" class="footnote">About</a>'
      );

      expect(document.querySelector('a')).toHaveClass('ves-link footnote', {
        exact: true,
      });
    });

    it('should keep the other attributes of a link', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="/about" title="About me">About</a>'
      );

      expect(document.querySelector('a')).toHaveAttribute('title', 'About me');
    });
  });

  describe('external links', () => {
    it('should open an http(s) link in a new tab', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="https://open-ui.org/">Open UI</a>'
      );

      expect(document.querySelector('a')).toHaveAttribute('target', '_blank');
    });

    it('should not open a relative link in a new tab', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="/about">About</a>'
      );

      expect(document.querySelector('a')).not.toHaveAttribute('target');
    });

    it('should display a labelled external icon for an http(s) link', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="https://open-ui.org/">Open UI</a>'
      );

      expect(
        document.querySelector('a > .ves-link__icon--external')
      ).toHaveAccessibleName('(opens in new tab)');
    });

    it('should not display the external icon for a relative link', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<a href="/about">About</a>'
      );

      expect(
        document.querySelector('.ves-link__icon--external')
      ).not.toBeInTheDocument();
    });
  });

  describe('surrounding content', () => {
    it('should leave the text outside of links unchanged', () => {
      document.body.innerHTML = linkHtmlProcessor.process(
        '<p>Read the <a href="/about">about</a> page.</p>'
      );

      expect(document.querySelector('p')).toHaveTextContent(
        /^Read the about page\.$/
      );
    });
  });
});
