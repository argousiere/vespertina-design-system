import type { Meta, StoryObj } from '@storybook/react-vite';

import MarkdownRenderer from '@components/MarkdownRenderer';
import { getEntry } from '@core/scripts/entries-registry';

const meta = {
  title: 'Base/Text',
  component: MarkdownRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    className: 'ves-entry-body',
  },
  argTypes: {
    html: { control: false },
  },
} satisfies Meta<typeof MarkdownRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings = {
  args: {
    html: getEntry('headings.md')?.html ?? '',
  },
} satisfies Story;

export const Paragraph = {
  args: {
    html: getEntry('paragraphs.md')?.html ?? '',
  },
} satisfies Story;

export const Link = {
  args: {
    html: getEntry('links.md')?.html ?? '',
  },
} satisfies Story;
