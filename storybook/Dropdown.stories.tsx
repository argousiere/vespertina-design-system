import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ButtonVariant } from '@core/models/ButtonModel';
import { DropdownAnchor, DropdownDirection } from '@react/constants';
import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import MenuList from '@components/MenuList';
import SearchableList from '@components/SearchableList';
import TextInput from '@components/TextInput';
import { buttonVariantArgType } from './arg-types/button';
import { iconArgType } from './arg-types/icon';
import { menuOptions } from './fixtures/menu-options';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
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
    icon: iconArgType,
    variant: buttonVariantArgType,
    anchor: {
      control: 'inline-radio',
      options: Object.values(DropdownAnchor),
      table: { type: { summary: 'DropdownAnchor' } },
    },
    children: { table: { disable: true } },
  },
  args: {
    onOpenChange: fn(),
    text: 'Destinations',
    icon: 'orbit',
    variant: ButtonVariant.PRIMARY,
    anchor: DropdownAnchor.START,
    children: null,
  },
  render: function Render(args) {
    const [value, setValue] = useState('laconia');

    return (
      <Dropdown {...args}>
        <MenuList
          aria-label={args.text}
          options={menuOptions.map((option) => {
            return { ...option, selected: option.value === value };
          })}
          showIcon
          onMenuItemClick={setValue}
        />
      </Dropdown>
    );
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMenuList = {} satisfies Story;

export const WithSearchableList = {
  render: function Render(args) {
    const [value, setValue] = useState('laconia');

    return (
      <Dropdown {...args}>
        <SearchableList
          aria-label={args.text}
          options={menuOptions.map((option) => {
            return { ...option, selected: option.value === value };
          })}
          showIcon
          onMenuItemClick={setValue}
        />
      </Dropdown>
    );
  },
} satisfies Story;

export const WithCustomContent = {
  args: {
    text: 'Add Destination',
    icon: 'orbit',
  },
  render: function Render(args) {
    const [name, setName] = useState('');

    return (
      <Dropdown {...args}>
        <form
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 8,
            padding: 8,
          }}
          onSubmit={(event) => {
            event.preventDefault();
            setName('');
          }}
        >
          <TextInput
            label="Name"
            placeholder="Destination name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            onClear={() => {
              setName('');
            }}
            style={{
              flex: '1 0 auto',
              minWidth: 0,
            }}
          />
          <Button
            style={{ flex: '0 0 auto' }}
            type="submit"
            text="Add"
            disabled={!name}
          />
        </form>
      </Dropdown>
    );
  },
} satisfies Story;

export const Secondary = {
  args: { variant: ButtonVariant.SECONDARY },
} satisfies Story;

export const Basic = {
  args: { variant: ButtonVariant.BASIC },
} satisfies Story;

export const AnchorEnd = {
  args: { anchor: DropdownAnchor.END },
} satisfies Story;
