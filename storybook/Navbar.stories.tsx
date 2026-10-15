import type { Meta, StoryObj } from '@storybook/react-vite';

import Navbar from '@components/Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Text logo' },
    homeUrl: {
      control: false,
      table: { type: { summary: 'string' } },
    },
    navItems: {
      control: false,
      table: { type: { summary: 'NavListItemProps[]' } },
    },
    actions: {
      control: false,
      table: { type: { summary: 'ToolbarAction[]' } },
    },
    onActionTrigger: {
      control: false,
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'The Vespertine Cadet',
    navItems: [
      { label: 'Home', url: '#', active: true },
      { label: 'Art', url: '#art' },
      { label: 'Poetry', url: '#poetry' },
      { label: 'About', url: '#about' },
    ],
    actions: [{ name: 'search' }],
  },
} satisfies Story;

export const WithoutItems = {
  args: {
    title: 'The Vespertine Cadet',
    actions: [{ name: 'search' }],
  },
} satisfies Story;
