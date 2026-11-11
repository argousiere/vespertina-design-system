import { marked } from 'marked';
import { markdownHtmlProcessor } from '@core/utils/markdown-html-processor/markdown-html-processor';

const files = import.meta.glob<string>('../content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const images = import.meta.glob<string>('../images/*', {
  import: 'default',
  eager: true,
});

export const renderMarkdown = (filename: string): string => {
  const raw = files[`../content/${filename}`];

  if (raw === undefined) {
    throw new Error(
      `renderMarkdown: no fixture "storybook/content/${filename}"`
    );
  }

  const html = marked.parse(raw, {
    async: false,
    walkTokens: (token) => {
      if (token.type === 'image') {
        token.href = images[token.href] ?? token.href;
      }
    },
  });

  return markdownHtmlProcessor.process(html);
};
