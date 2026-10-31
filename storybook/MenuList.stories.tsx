import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
    'aria-label': 'Planets',
    value: 'laconia',
    showIcon: true,
    options: menuOptions,
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);

    return (
      <MenuList
        {...args}
        style={{ maxWidth: 480 }}
        value={value}
        onValueChange={setValue}
      />
    );
  },
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const MixedIcons = {
  args: {
    options: menuOptions.map((option, index) => {
      return index % 2 === 0 ? option : { ...option, icon: undefined };
    }),
  },
} satisfies Story;

export const WithoutIcons = {
  args: { showIcon: false },
} satisfies Story;

export const Empty = {
  args: { options: [] },
} satisfies Story;
