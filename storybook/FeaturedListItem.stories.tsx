import type { Meta, StoryObj } from '@storybook/react-vite';

import FeaturedListItem from '@components/FeaturedListItem';
import type { EntryModel } from '@core/models/EntryModel';
import { entryArgTypes } from './arg-types/entry';
import { entryRecord } from './fixtures/entries';
import { thumbnailRecord } from './fixtures/thumbnails';

const meta = {
  title: 'Components/FeaturedListItem',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: entryArgTypes,
  decorators: (Story) => (
    <ul className="ves-featured-list__items">
      <Story />
    </ul>
  ),
  render: (entry) => <FeaturedListItem entry={entry} />,
} satisfies Meta<EntryModel>;

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
