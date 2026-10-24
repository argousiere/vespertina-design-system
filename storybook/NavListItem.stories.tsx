import type { Meta, StoryObj } from '@storybook/react-vite';

import NavListItem from '@components/NavListItem';
import type { NavItemModel } from '@core/models/NavItemModel';
import { navItemArgTypes } from './arg-types/nav-item';
import { navItems } from './fixtures/nav-items';

type NavListItemArgs = NavItemModel & { active?: boolean; focused?: boolean };

const meta = {
  title: 'Components/NavListItem',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    ...navItemArgTypes,
    active: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    focused: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
  },
  args: {
    active: false,
    focused: false,
  },
  render: ({ active, focused, ...item }) => (
    <NavListItem item={item} active={active} focused={focused} />
  ),
} satisfies Meta<NavListItemArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: { ...navItems[1] },
} satisfies Story;

export const Active = {
  args: { ...navItems[0], active: true },
} satisfies Story;

export const focused = {
  args: { ...navItems[2], focused: true },
} satisfies Story;
