import type { Meta, StoryObj } from '@storybook/react-vite';

import MarkdownBlock from './utils/MarkdownBlock';
import { renderMarkdown } from './utils/render-markdown';

const meta = {
  title: 'Base/Text',
  component: MarkdownBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    className: 'ves-entry__body',
  },
  argTypes: {
    html: { control: false },
  },
} satisfies Meta<typeof MarkdownBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings = {
  args: {
    html: renderMarkdown('headings.md'),
  },
} satisfies Story;

export const Paragraph = {
  args: {
    html: renderMarkdown('paragraphs.md'),
  },
} satisfies Story;

export const Link = {
  args: {
    html: renderMarkdown('links.md'),
  },
} satisfies Story;
