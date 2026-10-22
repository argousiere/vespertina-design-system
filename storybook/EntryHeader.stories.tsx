import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryHeader from '@components/EntryHeader';

const meta = {
  title: 'Components/EntryHeader',
  component: EntryHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof EntryHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Celestial Tapestry',
    date: '2017-09-12',
    readingTimeWPM: 3,
    excerpt: 'Weaving words and thoughts against the backdrop of space. Only memories, remnants.. possibly even mere musings such as this, serve as proof of their existence.',
  },
} satisfies Story;

export const NoExcerpt = {
  args: {
    title: 'Celestial Tapestry',
    date: '2017-09-12',
    readingTimeWPM: 3,
  },
} satisfies Story;
