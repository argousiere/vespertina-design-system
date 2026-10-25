import type { Meta, StoryObj } from '@storybook/react-vite';

import Thumbnail from '@components/Thumbnail';
import { aspectRatioArgType, thumbnailArgType } from './arg-types/thumbnail';
import { emptyThumbnailRecord, thumbnailRecord } from './fixtures/thumbnails';

const meta = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    thumbnail: thumbnailArgType,
    aspectRatio: aspectRatioArgType,
    captionMaxLines: {
      control: 'number',
      description: 'Lines shown before the caption is cut off',
    },
    caption: { control: false, table: { type: { summary: 'string,React.ReactNode' }} },
  },
  args: {
    captionMaxLines: 3,
  }
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    thumbnail: thumbnailRecord.logo,
  },
} satisfies Story;

export const WithCaption = {
  args: {
    thumbnail: thumbnailRecord.dizzy,
    caption: 'Against the dizzying backdrop of space',
  },
} satisfies Story;

export const WithTruncatedCaption = {
  args: {
    thumbnail: thumbnailRecord.dizzy,
    caption: (
      <>
        Against the <em>dizzying</em> backdrop of space, I see a prism of past
        and future lives.
      </>
    ),
    captionMaxLines: 2,
  },
} satisfies Story;

export const Placeholder = {
  args: {
    thumbnail: emptyThumbnailRecord.placeholder,
    caption: 'Against the dizzying backdrop of space',
  },
} satisfies Story;

export const MissingImageFile = {
  args: {
    thumbnail: emptyThumbnailRecord.missing,
    caption: 'Against the dizzying backdrop of space',
  },
} satisfies Story;
