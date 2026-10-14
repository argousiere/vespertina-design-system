import type { Meta, StoryObj } from '@storybook/react-vite';

import NavListItem from '@components/NavListItem';

const meta = {
  title: 'Components/NavListItem',
  component: NavListItem,
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
    url: { control: { type: 'text',  disable: true } },
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
  }
} satisfies Meta<typeof NavListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: { label: 'Art', url: '#' },
} satisfies Story;

export const Active = {
  args: { label: 'Home', url: '#', active: true },
} satisfies Story;

export const focused = {
  args: { label: 'Poetry', url: '#', focused: true },
} satisfies Story;
