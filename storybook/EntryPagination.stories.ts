import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryPagination from '@components/EntryPagination';
import { entryRecord } from './fixtures/entries';

const meta = {
  title: 'Components/EntryPagination',
  component: EntryPagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    previousEntry: {
      control: false,
      table: { type: { summary: 'EntryModel' } },
    },
    nextEntry: {
      control: false,
      table: { type: { summary: 'EntryModel' } },
    },
    previousSectionLabel: {
      control: 'text',
      description: 'Previous Entry section label',
    },
    nextSectionLabel: {
      control: 'text',
      description: 'Next Entry section label',
    },
  },
  args: {
    previousSectionLabel: 'Previous Entry',
    nextSectionLabel: 'Next Entry',
  }
} satisfies Meta<typeof EntryPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    previousEntry: entryRecord.theBubblingBrookAtBerthelot,
    nextEntry: entryRecord.analogClocksAndClockTowers,
  },
} satisfies Story;

export const PreviousEntryOnly = {
  args: {
    previousEntry: entryRecord.theTranscontinentalYear,
  },
} satisfies Story;

export const NextEntryOnly = {
  args: {
    nextEntry: entryRecord.myFirstWinter,
  },
} satisfies Story;

export const LongEntryTitles = {
  args: {
    previousEntry: {
      ...entryRecord.theBubblingBrookAtBerthelot,
      title:
        entryRecord.theBubblingBrookAtBerthelot.description,
    },
    nextEntry: {
      ...entryRecord.analogClocksAndClockTowers,
      title:
        entryRecord.analogClocksAndClockTowers.description,
    },
  },
} satisfies Story;

export const CustomSectionLabels = {
  args: {
    previousEntry: entryRecord.theBubblingBrookAtBerthelot,
    nextEntry: entryRecord.analogClocksAndClockTowers,
    previousSectionLabel: 'Go Back',
    nextSectionLabel: 'Go Forward',
  },
} satisfies Story;
