import { afterEach, describe, expect, it, vi } from 'vitest';
import { markdownHtmlProcessor } from './markdown-html-processor';
import { thumbnailHtmlProcessor } from './markdown-image-processor';
import { linkHtmlProcessor } from './markdown-link-processor';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('markdownHtmlProcessor', () => {
  it('should call the thumbnail processor', () => {
    vi.spyOn(thumbnailHtmlProcessor, 'process');

    markdownHtmlProcessor.process('<p>Text</p>');

    expect(thumbnailHtmlProcessor.process).toHaveBeenCalled();
  });

  it('should call the link processor', () => {
    vi.spyOn(linkHtmlProcessor, 'process');

    markdownHtmlProcessor.process('<p>Text</p>');

    expect(linkHtmlProcessor.process).toHaveBeenCalled();
  });
});
