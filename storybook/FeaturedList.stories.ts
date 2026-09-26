import type { Meta, StoryObj } from '@storybook/react-vite';

import FeaturedList from '@components/FeaturedList';

const meta = {
  title: 'Components/FeaturedList',
  component: FeaturedList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      description: 'Array of featured items',
    },
  },
} satisfies Meta<typeof FeaturedList>;

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
        description: 'Musings on these wonderful pieces of machinery',
      },
      {
        id: '2',
        title: 'The Bubbling Brook at Berthelot',
        date: new Date('2016-08-11'),
        url: '#',
        description: 'An ode to the little park beside my office',
      },
      {
        id: '3',
        title: 'My First Winter',
        date: new Date('2016-03-06'),
        url: '#',
        description:
          'Notes on stinging ears and icy fingers from a tropical girl.',
      },
      {
        id: '4',
        title: 'The Transcontinental Year',
        date: new Date('2015-12-19'),
        url: '#',
        description:
          'Reminiscing on the administrative hoops I jumped through to get to France',
      },
      {
        id: '5',
        title: 'In the Foyer of Reveries',
        date: new Date('2015-12-03'),
        url: '#',
        description: 'Reminiscing my leap into the expat life.',
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
        description: 'Musings on these wonderful pieces of machinery',
      },
    ],
  },
};
