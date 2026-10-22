import type { Meta, StoryObj } from '@storybook/react-vite';

import ReadingTime from '@components/ReadingTime';

const meta = {
  title: 'Components/ReadingTime',
  component: ReadingTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    minutes: { control: 'number' },
    className: { control: false },
  },
} satisfies Meta<typeof ReadingTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    minutes: 3,
  },
} satisfies Story;
