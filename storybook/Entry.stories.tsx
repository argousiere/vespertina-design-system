import type { Meta, StoryObj } from '@storybook/react-vite';

import Entry from '@components/Entry';
import type { EntryModel } from '@core/models/EntryModel';
import { thumbnailHtmlProcessor } from '@core/utils/markdown-html-utils';
import { entryArgTypes } from './arg-types/entry';
import { renderMarkdown } from './utils/render-markdown';
import { tags } from './fixtures/tags';

const meta = {
  title: 'Components/Entry',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: entryArgTypes,
  args: {
    id: 'entry',
  },
  render: (entry) => (
    <Entry
      entry={entry}
      html={thumbnailHtmlProcessor.process(renderMarkdown('entry.md'))}
    />
  ),
} satisfies Meta<EntryModel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Celestial Tapestry',
    url: '#',
    date: '2017-09-12',
    readingTimeMinutes: 1,
    description: 'Weaving words and thoughts against the backdrop of space',
    tags: tags,
  },
} satisfies Story;
