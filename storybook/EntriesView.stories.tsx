import type { Meta, StoryObj } from '@storybook/react-vite';

import EntriesView from '@components/EntriesView';
import { EntriesViewMode } from '@react/constants';
import { entriesViewModeArgType } from './arg-types/entry';
import { entries } from './fixtures/entries';

const meta = {
  title: 'Components/EntriesView',
  component: EntriesView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      table: { type: { summary: 'EntryListItemProps[]' } },
    },
    viewMode: entriesViewModeArgType,
    onViewChange: {
      control: false,
    },
  },
  args: {
    entryListTitle: 'Latest Posts',
    items: entries.map((entry) => ({
      entry
    })),
  },
} satisfies Meta<typeof EntriesView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const ListView = {
  args: { viewMode: EntriesViewMode.LIST },
} satisfies Story;

export const GalleryView = {
  args: { viewMode: EntriesViewMode.GALLERY },
} satisfies Story;

export const Empty = {
  args: { items: [] },
} satisfies Story;
