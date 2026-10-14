import type { Meta, StoryObj } from '@storybook/react-vite';

import Toolbar from '@components/Toolbar';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    actions: {
      control: false,
    },
    onActionTrigger: {
      control: false,
    },
    ariaLabel: {
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    actions: [{ name: 'search' }],
  },
} satisfies Story;

export const WithTextAction = {
  args: {
    actions: [{ name: 'Save' }],
  },
} satisfies Story;

export const MultipleActions = {
  args: {
    actions: [{ name: 'search' }, { name: 'Save' }],
  },
} satisfies Story;
