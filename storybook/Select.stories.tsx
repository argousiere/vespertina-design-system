import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DropdownAnchor, DropdownDirection } from '@react/constants';
import useSelection from '@react/hooks/useSelection';
import Select from '@components/Select';
import type { SelectProps } from '@components/Select';
import { menuOptions } from './fixtures/menu-options';

type SelectArgs = Omit<SelectProps, 'selection'> & { multiselect?: boolean };

const meta = {
  title: 'Components/Select',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: Object.values(DropdownDirection),
      table: { type: { summary: 'DropdownDirection' } },
    },
    multiselect: {
      control: 'boolean',
    },
    anchor: {
      control: 'inline-radio',
      options: Object.values(DropdownAnchor),
      table: { type: { summary: 'DropdownAnchor' } },
    },
    onOpenChange: {
      table: { disable: true },
    },
  },
  args: {
    onOpenChange: fn(),
    'aria-label': 'Planets',
    placeholder: 'Select a destination',
    showIcon: true,
    multiselect: false,
    direction: DropdownDirection.DOWN,
    anchor: DropdownAnchor.START,
  },
  render: function Render({ multiselect, ...args }) {
    const selection = useSelection({ items: menuOptions, multiselect });

    useEffect(() => {
      if (selection.multiselect !== Boolean(multiselect)) {
        selection.toggleMultiselect();
      }
    }, [selection, multiselect]);

    return <Select {...args} selection={selection} />;
  },
} satisfies Meta<SelectArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Multiselect = {
  args: { multiselect: true },
} satisfies Story;

export const AnchorEnd = {
  args: { anchor: DropdownAnchor.END },
} satisfies Story;

export const Disabled = {
  args: { disabled: true },
} satisfies Story;
