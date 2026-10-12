import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryBody from '@components/EntryBody';

const meta = {
  title: 'Components/EntryBody',
  component: EntryBody,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: false },
  },
} satisfies Meta<typeof EntryBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: 'entry-body.md',
  },
} satisfies Story;
