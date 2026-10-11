import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryPagination from '@components/EntryPagination';

const meta = {
  title: 'Components/EntryPagination',
  component: EntryPagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    previousTitle: {
      control: 'text',
      description: 'Title of the older entry',
    },
    previousUrl: {
      control: 'text',
      description: 'URL of the older entry',
    },
    nextTitle: {
      control: 'text',
      description: 'Title of the newer entry',
    },
    nextUrl: {
      control: 'text',
      description: 'URL of the newer entry',
    },
    previousLabel: {
      control: 'text',
      description: 'Older Posts section label',
    },
    nextLabel: {
      control: 'text',
      description: 'Newer Posts section label',
    },
  },
} satisfies Meta<typeof EntryPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    previousTitle: 'The Bubbling Brook at Berthelot',
    previousUrl: '#',
    nextTitle: 'Analog Clocks and Clock Towers',
    nextUrl: '#',
  },
} satisfies Story;

export const OlderOnly = {
  args: {
    previousTitle: 'The Transcontinental Year',
    previousUrl: '#',
  },
} satisfies Story;

export const NewerOnly = {
  args: {
    nextTitle: 'My First Winter',
    nextUrl: '#',
  },
} satisfies Story;

export const LongTitles = {
  args: {
    previousTitle:
      'Sonnet III: The Ghost of Whimsical Fascination, and Other Poems Written on the Night Train to Lyon',
    previousUrl: '#',
    nextTitle:
      'In the Foyer of Reveries: Notes on Clock Towers, Brooks, and the Long Transcontinental Year',
    nextUrl: '#',
  },
} satisfies Story;

export const CustomLabels = {
  args: {
    previousTitle: 'The Bubbling Brook at Berthelot',
    previousUrl: '#',
    nextTitle: 'Analog Clocks and Clock Towers',
    nextUrl: '#',
    previousLabel: 'Previous',
    nextLabel: 'Next',
  },
} satisfies Story;
