import type { Meta, StoryObj } from '@storybook/react-vite';

import Navbar from '@components/Navbar';
import { navItems } from './fixtures/nav-items';
import { activeUrlArgType, currentUrlArgType } from './arg-types/nav-item';

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
      table: { type: { summary: 'NavItemModel[]' } },
    },
    actions: {
      control: false,
      table: { type: { summary: 'ToolbarAction[]' } },
    },
    onActionTrigger: {
      control: false,
    },
    activeUrl: activeUrlArgType,
    currentUrl: currentUrlArgType,
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'The Vespertine Cadet',
    navItems,
    activeUrl: '#',
    actions: [{ name: 'search' }],
  },
} satisfies Story;

export const WithoutItems = {
  args: {
    title: 'The Vespertine Cadet',
    actions: [{ name: 'search' }],
  },
} satisfies Story;
