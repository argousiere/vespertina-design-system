import type { Meta, StoryObj } from '@storybook/react-vite';

import NavList from '@components/NavList';

const meta = {
  title: 'Components/NavList',
  component: NavList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      table: { 
        type: { summary: 'NavListItemProps[]' }, 
        defaultValue: { summary: '[]' } 
      }
    },
    ariaLabel: {
      control: {
        type: 'text',
        disable: true,
      },
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof NavList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    items: [
      { label: 'Home', url: '#', active: true },
      { label: 'Art', url: '#art' },
      { label: 'Poetry', url: '#poetry' },
      { label: 'About', url: '#about' },
    ],
  },
} satisfies Story;
