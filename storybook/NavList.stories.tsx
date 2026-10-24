import type { Meta, StoryObj } from '@storybook/react-vite';

import NavList from '@components/NavList';
import { activeUrlArgType, navItemsArgType } from './arg-types/nav-item';
import { navItems } from './fixtures/nav-items';

const meta = {
  title: 'Components/NavList',
  component: NavList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: navItemsArgType,
    activeUrl: activeUrlArgType,
  },
} satisfies Meta<typeof NavList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    items: navItems,
    activeUrl: 'home',
  },
} satisfies Story;
