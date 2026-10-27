import type { Meta, StoryObj } from '@storybook/react-vite';

import TagHeader from '@components/TagHeader';
import { tagArgType } from './arg-types/tags';
import { tagRecord } from './fixtures/tags';

const meta = {
  title: 'Components/TagHeader',
  component: TagHeader,
  tags: ['autodocs'],
  argTypes: {
    tag: tagArgType,
  },
} satisfies Meta<typeof TagHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tag: tagRecord.art,
  },
} satisfies Story;

export const NoDescription = {
  args: {
    tag: tagRecord.poetry,
  },
} satisfies Story;
