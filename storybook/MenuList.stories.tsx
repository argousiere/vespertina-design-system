import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import MenuList from '@components/MenuList';
import { menuOptions } from './fixtures/menu-options';

const meta = {
  title: 'Components/MenuList',
  component: MenuList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      table: { type: { summary: 'MenuListOption[]' } },
    },
  },
  args: {
    'aria-label': 'Destinations',
    onMenuItemClick: fn(),
    showIcon: true,
    options: menuOptions.map((option) => {
      return { ...option, selected: option.value === 'laconia' };
    }),
  },
  render: (args) => {
    return <MenuList {...args} style={{ maxWidth: 480 }} />;
  },
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const MixedIcons = {
  args: {
    options: menuOptions.map((option, index) => {
      return index % 2 === 0
        ? { ...option, selected: option.value === 'laconia' }
        : { ...option, icon: undefined };
    }),
  },
} satisfies Story;

export const WithoutIcons = {
  args: { showIcon: false },
} satisfies Story;

export const Empty = {
  args: { options: [] },
} satisfies Story;
