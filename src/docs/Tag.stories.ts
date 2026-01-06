import type { Meta, StoryObj } from '@storybook/react-vite';

import Tag from '@components/Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    slug: 'razorback',
    description: "You can't take the Razorback! She is gone and gone and gone!",
  },
} satisfies Story;
