import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryHeader from '@components/EntryHeader';
import type { EntryModel } from '@core/models/EntryModel';
import { entryArgTypes } from './arg-types/entry';

const meta = {
  title: 'Components/EntryHeader',
  tags: ['autodocs'],
  argTypes: {
    ...entryArgTypes,
    tags: { table: { disable: true } }
  },
  args: {
    id: 'entry',
  },
  render: (entry) => <EntryHeader entry={entry} />,
} satisfies Meta<EntryModel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Celestial Tapestry',
    url: '#',
    date: '2017-09-12',
    readingTimeMinutes: 3,
    description:
      'Weaving words and thoughts against the backdrop of space. Only memories, remnants.. possibly even mere musings such as this, serve as proof of their existence.',
  },
} satisfies Story;

export const NoDescription = {
  args: {
    title: 'Celestial Tapestry',
    url: '#',
    date: '2017-09-12',
    readingTimeMinutes: 3,
  },
} satisfies Story;
