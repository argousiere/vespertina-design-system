import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryList from '@components/EntryList';
import { entries, entryRecord } from './fixtures/entries';

const meta = {
  title: 'Components/EntryList',
  component: EntryList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    entryListTitle: {
      control: 'text',
      description: 'Title of entry list',
    },
    items: {
      control: false,
      table: { type: { summary: 'EntryListProps[]' } }
    },
  },
} satisfies Meta<typeof EntryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    entryListTitle: 'Latest Posts',
    items: entries.map((entry) => ({ entry })),
  },
};

export const WithDisabledEntry: Story = {
  args: {
    entryListTitle: 'Latest Posts',
    items: entries.map((entry, index) => ({ entry, disabled: index === 1 })),
  },
};

export const SingleEntry: Story = {
  args: {
    entryListTitle: 'Latest Posts',
    items: [{ entry: entryRecord.analogClocksAndClockTowers }],
  },
};

export const Empty: Story = {
  args: {
    entryListTitle: 'Latest Posts',
    items: [],
  },
};
