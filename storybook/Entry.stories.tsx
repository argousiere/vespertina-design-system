import type { Meta, StoryObj } from '@storybook/react-vite';

import Entry from '@components/Entry';
import { renderMarkdown } from './utils/render-markdown';

const meta = {
  title: 'Components/Entry',
  component: Entry,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    html: { control: false },
    tags: { control: false, table: { type: { summary: 'TagModel[]' } } },
  },
} satisfies Meta<typeof Entry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Celestial Tapestry',
    date: '2017-09-12',
    html: renderMarkdown('entry.md'),
    readingTimeWPM: 1,
    excerpt: 'Weaving words and thoughts against the backdrop of space',
    tags: [{ slug: 'musings', url: '#' }],
  },
} satisfies Story;
