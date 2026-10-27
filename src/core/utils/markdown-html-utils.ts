import type { MarkdownHtmlProcessor } from '../models/MarkdownHtmlProcessor';
import type { ImageModel } from '../models/ImageModel';

type Attributes = Record<string, string | number | undefined>;

const IMAGE_PARAGRAPH = /<p>\s*<img\b([^>]*)>\s*<\/p>/g;
const ATTRIBUTE = /([\w-]+)="([^"]*)"/g;

const convertToThumbnailHtml = (attributes: Attributes, caption?: string): string => {
  const imgAttributes = Object.entries({ class: 'ves-thumbnail__img', ...attributes })
    .filter(([, value]) => value !== undefined)
    .map(
      ([name, value]) => `${name}="${String(value).replaceAll('"', '&quot;')}"`
    )
    .join(' ');

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
) => convertToThumbnailHtml({ src, alt, width, height }, caption);

export const thumbnailHtmlProcessor: MarkdownHtmlProcessor = {
  process: (html): string =>
    html.replace(IMAGE_PARAGRAPH, (_, imgAttributes: string) => {
      const { title, ...attributes } = Object.fromEntries(
        [...imgAttributes.matchAll(ATTRIBUTE)].map(([, name, value]) => [
          name,
          value,
        ])
      );

      return convertToThumbnailHtml(attributes, title);
    }),
};
