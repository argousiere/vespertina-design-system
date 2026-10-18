import type { Meta, StoryObj } from '@storybook/react-vite';

import MarkdownRenderer from '@components/MarkdownRenderer';
import { getEntry } from '@core/scripts/entries-registry';

const meta = {
  title: 'Components/MarkdownRenderer',
  component: MarkdownRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    html: { control: false },
  },
} satisfies Meta<typeof MarkdownRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    html: getEntry('entry.md')?.html ?? '',
  },
} satisfies Story;
