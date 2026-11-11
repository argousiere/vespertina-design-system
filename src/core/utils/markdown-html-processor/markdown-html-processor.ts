import type { MarkdownHtmlProcessor } from '../../models/MarkdownHtmlProcessor';
import { thumbnailHtmlProcessor } from './markdown-image-processor';
import { linkHtmlProcessor } from './markdown-link-processor';

export const markdownHtmlProcessor: MarkdownHtmlProcessor = {
  process: (html): string => {
    return [thumbnailHtmlProcessor, linkHtmlProcessor].reduce(
      (result, processor) => {
        return processor.process(result);
      },
      html
    );
  },
};
