import type { Meta, StoryObj } from '@storybook/react-vite';

import Gallery from '@components/Gallery';
import { aspectRatioArgType } from './arg-types/image';
import { entries, entryRecord } from './fixtures/entries';
import { thumbnailRecord } from './fixtures/thumbnails';
import { AspectRatio } from '@core/models/ImageModel';

const meta = {
  title: 'Components/Gallery',
  component: Gallery,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      table: { type: { summary: 'GalleryItemProps[]' } },
    },
    aspectRatio: aspectRatioArgType,
  },
  args: {
    aspectRatio: AspectRatio.WIDESCREEN,
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: entries.map((entry) => ({ entry })),
  },
};

export const Square: Story = {
  args: {
    ...Default.args,
    aspectRatio: AspectRatio.SQUARE,
  },
};

export const SingleEntry: Story = {
  args: {
    items: [
      {
        entry: {
          ...entryRecord.analogClocksAndClockTowers,
          thumbnail: thumbnailRecord.dizzy,
        },
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
