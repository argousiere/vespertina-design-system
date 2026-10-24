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
    abbreviated: { control: 'boolean' },
    className: { control: false },
  },
  args: {
    abbreviated: true
  }
} satisfies Meta<typeof ReadingTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    minutes: 3,
  },
} satisfies Story;

export const Unabbreviated = {
  args: {
    minutes: 3,
    abbreviated: false,
  },
} satisfies Story;
