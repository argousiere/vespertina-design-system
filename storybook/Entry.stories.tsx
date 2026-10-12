import type { Meta, StoryObj } from '@storybook/react-vite';

import Entry from '@components/Entry';

const meta = {
  title: 'Components/Entry',
  component: Entry,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: false },
  },
} satisfies Meta<typeof Entry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: 'entry.md',
  },
} satisfies Story;
