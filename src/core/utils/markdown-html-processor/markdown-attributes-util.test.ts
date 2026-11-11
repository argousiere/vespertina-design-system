import { describe, expect, it } from 'vitest';
import {
  parseAttributes,
  convertAttributesToHtmlString,
} from './markdown-attributes-util';

describe('parseAttributes', () => {
  it('should parse attributes into names and values', () => {
    expect(parseAttributes(' href="/about" title="About"')).toStrictEqual({
      href: '/about',
      title: 'About',
    });
  });

  it('should parse attribute names with dashes', () => {
    expect(parseAttributes(' aria-label="Close"')).toStrictEqual({
      'aria-label': 'Close',
    });
  });

  it('should return an empty object when there are no attributes', () => {
    expect(parseAttributes('')).toStrictEqual({});
  });
});

describe('convertAttributesToHtmlString', () => {
  it('should serialize attributes into HTML', () => {
    expect(
      convertAttributesToHtmlString({ href: '/about', title: 'About' })
    ).toBe('href="/about" title="About"');
  });

  it('should leave out undefined attributes', () => {
    expect(
      convertAttributesToHtmlString({ src: 'a.jpg', alt: undefined })
    ).toBe('src="a.jpg"');
  });

  it('should convert number values to strings', () => {
    expect(convertAttributesToHtmlString({ width: 10 })).toBe('width="10"');
  });

  it('should escape double quotes in values', () => {
    expect(convertAttributesToHtmlString({ alt: 'The "Queen"' })).toBe(
      'alt="The &quot;Queen&quot;"'
    );
  });
});
