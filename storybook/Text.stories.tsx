import type { Meta, StoryObj } from '@storybook/react-vite';

import MarkdownBlock from './utils/MarkdownBlock';
import { renderMarkdown } from './utils/render-markdown';

const meta = {
  title: 'Base/Text',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings = {
  render: () => (
    <MarkdownBlock
      className="ves-entry__body"
      html={renderMarkdown('headings.md')}
    />
  ),
} satisfies Story;

export const Paragraph = {
  render: () => (
    <MarkdownBlock
      className="ves-entry__body"
      html={renderMarkdown('paragraphs.md')}
    />
  ),
} satisfies Story;

export const Link = {
  render: () => (
    <MarkdownBlock
      className="ves-entry__body"
      html={renderMarkdown('links.md')}
    />
  ),
} satisfies Story;
