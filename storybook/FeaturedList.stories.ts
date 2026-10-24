import type { Meta, StoryObj } from '@storybook/react-vite';

import FeaturedList from '@components/FeaturedList';
import { entries, entryRecord } from './fixtures/entries';

const meta = {
  title: 'Components/FeaturedList',
  component: FeaturedList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      table: { type: { summary: 'FeaturedListItemProps[]' } }
    },
  },
} satisfies Meta<typeof FeaturedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: entries.map((entry) => ({ entry })),
  },
};

export const SingleEntry: Story = {
  args: {
    items: [{ entry: entryRecord.analogClocksAndClockTowers }],
  },
};
