import type { MarkdownHtmlProcessor } from '../models/MarkdownHtmlProcessor';
import type { ImageModel } from '../models/ImageModel';
import { icons } from '../tokens/icons';

type Attributes = Record<string, string | number | undefined>;

const IMAGE_PARAGRAPH = /<p>\s*<img\b([^>]*)>\s*<\/p>/g;
const LINK = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
const EXTERNAL_URL = /^https?:\/\//;
const ATTRIBUTE = /([\w-]+)="([^"]*)"/g;

const parseAttributes = (attributes: string): Record<string, string> => {
  return Object.fromEntries(
    [...attributes.matchAll(ATTRIBUTE)].map(([, name, value]) => {
      return [name, value];
    })
  );
};

const convertAttributesToHtmlString = (attributes: Attributes): string => {
  return Object.entries(attributes)
    .filter(([, value]) => {
      return value !== undefined;
    })
    .map(([name, value]) => {
      return `${name}="${String(value).replaceAll('"', '&quot;')}"`;
    })
    .join(' ');
};

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
    return html.replace(IMAGE_PARAGRAPH, (_, imgAttributes: string) => {
      const { title, ...attributes } = parseAttributes(imgAttributes);

      return convertToThumbnailHtml(attributes, title);
    });
  },
};

export const linkHtmlProcessor: MarkdownHtmlProcessor = {
  process: (html): string => {
    return html.replace(LINK, (_, linkAttributes: string, content: string) => {
      const { class: className, ...attributes } =
        parseAttributes(linkAttributes);
      const isExternal = EXTERNAL_URL.test(attributes.href ?? '');
      const iconHtml = isExternal
        ? `<span ${convertAttributesToHtmlString({
            class:
              'ves-icon ves-icon--external-link ves-link__icon ves-link__icon--external',
            role: 'img',
            'aria-label': '(opens in new tab)',
            style: `--ves-icon-src: url("${icons['external-link']}")`,
          })}></span>`
        : '';

      return `<a ${convertAttributesToHtmlString({
        ...attributes,
        ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
        class: className ? `ves-link ${className}` : 'ves-link',
      })}>${content}${iconHtml}</a>`;
    });
  },
};
