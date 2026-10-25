import type { Meta, StoryObj } from '@storybook/react-vite';

import GalleryItem from '@components/GalleryItem';
import type { EntryModel } from '@core/models/EntryModel';
import { entryArgTypes } from './arg-types/entry';
import { entryRecord } from './fixtures/entries';
import { thumbnailRecord } from './fixtures/thumbnails';

type GalleryItemArgs = EntryModel & { captionMaxLines?: number };

const meta = {
  title: 'Components/GalleryItem',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...entryArgTypes,
    captionMaxLines: {
      control: 'number',
      description: 'Lines shown before the title is cut off',
    },
  },
  args: {
    captionMaxLines: 1,
  },
  decorators: (Story) => (
    <ul className="ves-gallery" style={{ width: 360 }}>
      <Story />
    </ul>
  ),
  render: ({ captionMaxLines, ...entry }) => (
    <GalleryItem entry={entry} captionMaxLines={captionMaxLines} />
  ),
} satisfies Meta<GalleryItemArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...entryRecord.analogClocksAndClockTowers,
    thumbnail: thumbnailRecord.dizzy,
  },
};

export const WithoutThumbnail: Story = {
  args: entryRecord.analogClocksAndClockTowers,
};

export const Truncated: Story = {
  args: {
    ...entryRecord.longTitle1,
    thumbnail: thumbnailRecord.dizzy,
  },
};
