import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryList from '@components/EntryList';

const meta = {
  title: 'Components/EntryList',
  component: EntryList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      description: 'Array of entry list items',
    },
  },
} satisfies Meta<typeof EntryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Analog Clocks and Clock Towers',
        date: new Date('2016-09-03'),
        url: '#',
      },
      {
        id: '2',
        title: 'The Bubbling Brook at Berthelot',
        date: new Date('2016-08-11'),
        url: '#',
      },
      {
        id: '3',
        title: 'My First Winter',
        date: new Date('2016-03-06'),
        url: '#',
      },
      {
        id: '4',
        title: 'The Transcontinental Year',
        date: new Date('2015-12-19'),
        url: '#',
      },
      {
        id: '5',
        title: 'In the Foyer of Reveries',
        date: new Date('2015-12-03'),
        url: '#',
      },
    ],
  },
};

export const WithDisabledEntry: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Analog Clocks and Clock Towers',
        date: new Date('2016-09-03'),
        url: '#',
      },
      {
        id: '2',
        title: 'The Bubbling Brook at Berthelot',
        date: new Date('2016-08-11'),
        url: '#',
        disabled: true,
      },
      {
        id: '3',
        title: 'My First Winter',
        date: new Date('2016-03-06'),
        url: '#',
      },
      {
        id: '4',
        title: 'The Transcontinental Year',
        date: new Date('2015-12-19'),
        url: '#',
      },
      {
        id: '5',
        title: 'In the Foyer of Reveries',
        date: new Date('2015-12-03'),
        url: '#',
      },
    ],
  },
};

export const SingleEntry: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Analog Clocks and Clock Towers',
        date: new Date('2016-09-03'),
        url: '#',
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
