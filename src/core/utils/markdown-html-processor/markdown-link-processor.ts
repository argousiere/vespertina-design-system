import type { MarkdownHtmlProcessor } from '../../models/MarkdownHtmlProcessor';
import { icons } from '../../tokens/icons';
import {
  parseAttributes,
  convertAttributesToHtmlString,
} from './markdown-attributes-util';

const LINK_PATTERN = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
const EXTERNAL_URL_PATTERN = /^https?:\/\//;

export const linkHtmlProcessor: MarkdownHtmlProcessor = {
  process: (html): string => {
    return html.replace(
      LINK_PATTERN,
      (_, linkAttributes: string, content: string) => {
        const { class: className, ...attributes } =
          parseAttributes(linkAttributes);
        const isExternal = EXTERNAL_URL_PATTERN.test(attributes.href ?? '');
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
      }
    );
  },
};
