import type { MarkdownHtmlProcessor } from '../../models/MarkdownHtmlProcessor';
import type { ImageModel } from '../../models/ImageModel';
import {
  type Attributes,
  parseAttributes,
  convertAttributesToHtmlString,
} from './markdown-attributes-util';

const IMAGE_PARAGRAPH_PATTERN = /<p>\s*<img\b([^>]*)>\s*<\/p>/g;

const convertToThumbnailHtml = (
  attributes: Attributes,
  caption?: string
): string => {
  const imgAttributes = convertAttributesToHtmlString({
    class: 'ves-thumbnail__img',
    ...attributes,
  });

  const figcaption = caption
    ? `<figcaption class="ves-thumbnail__caption">${caption}</figcaption>`
    : '';

  return `
    <figure class="ves-thumbnail">
      <picture class="ves-thumbnail__picture"><img ${imgAttributes}></picture>
      ${figcaption}
    </figure>`;
};

export const renderThumbnailHtml = (
  { src, alt, width, height }: ImageModel,
  caption?: string
) => {
  return convertToThumbnailHtml({ src, alt, width, height }, caption);
};

export const thumbnailHtmlProcessor: MarkdownHtmlProcessor = {
  process: (html): string => {
    return html.replace(IMAGE_PARAGRAPH_PATTERN, (_, imgAttributes: string) => {
      const { title, ...attributes } = parseAttributes(imgAttributes);

      return convertToThumbnailHtml(attributes, title);
    });
  },
};
