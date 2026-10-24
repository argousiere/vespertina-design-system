import type { Meta, StoryObj } from '@storybook/react-vite';

import Tag from '@components/Tag';
import { tagRecord } from './fixtures/tags';
import { tagArgType } from './arg-types/tags';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: tagArgType
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tag: tagRecord['razorback'],
  },
} satisfies Story;

export const LongLabel = {
  args: {
    tag: tagRecord['long'],
  },
} satisfies Story;
