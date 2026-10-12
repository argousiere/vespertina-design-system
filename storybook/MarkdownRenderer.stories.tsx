import type { Meta, StoryObj } from '@storybook/react-vite';

import MarkdownRenderer from '@components/MarkdownRenderer';

const meta = {
  title: 'Components/MarkdownRenderer',
  component: MarkdownRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: false },
  },
} satisfies Meta<typeof MarkdownRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: 'entry.md',
  },
} satisfies Story;
