import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: 'Button',
    disabled: false,
  },
} satisfies Story;

export const Disabled = {
  args: {
    label: 'Button',
    disabled: true,
  },
} satisfies Story;
