import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import SearchableList from '@components/SearchableList';
import { menuOptions } from './fixtures/menu-options';

const meta = {
  title: 'Components/SearchableList',
  component: SearchableList,
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
    return <SearchableList {...args} style={{ maxWidth: 360 }} />;
  },
} satisfies Meta<typeof SearchableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Empty = {
  args: { options: [] },
} satisfies Story;
