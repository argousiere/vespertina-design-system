import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuItem from '@components/MenuItem';
import { iconArgType } from './arg-types/icon';

const meta = {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <ul role="menu" style={{ margin: 0, padding: 0, maxWidth: 480 }}>
          <Story />
        </ul>
      );
    },
  ],
  argTypes: {
    icon: iconArgType,
  },
  args: {
    label: 'Menu Item',
    icon: 'star',
    showIcon: true,
    active: false,
    selected: false,
    disabled: false,
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Active = {
  args: { active: true },
} satisfies Story;

export const Selected = {
  args: { selected: true },
} satisfies Story;

export const Disabled = {
  args: { disabled: true },
} satisfies Story;

export const TruncatedLabel = {
  args: {
    label: 'Truncate this menu item label because it is quite long',
  },
  render: (args) => {
    return <MenuItem {...args} style={{ width: 240 }} />;
  },
} satisfies Story;

export const WithoutIcon = {
  args: { icon: undefined },
} satisfies Story;

export const AllStates = {
  render: (args) => {
    return (
      <ul role="menu">
        <MenuItem {...args} />
        <MenuItem {...args} active />
        <MenuItem {...args} selected />
        <MenuItem {...args} disabled />
      </ul>
    );
  },
} satisfies Story;
