import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
    'aria-label': 'Planets',
    value: 'laconia',
    showIcon: true,
    options: menuOptions,
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);

    return (
      <SearchableList
        {...args}
        style={{ maxWidth: 360 }}
        value={value}
        onValueChange={setValue}
      />
    );
  },
} satisfies Meta<typeof SearchableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Empty = {
  args: { options: [] },
} satisfies Story;
