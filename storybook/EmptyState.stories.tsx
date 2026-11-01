import type { Meta, StoryObj } from '@storybook/react-vite';

import EmptyState from '@components/EmptyState';
import { iconArgType } from './arg-types/icon';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: iconArgType,
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const WithIcon = {
  args: {
    icon: 'search',
    message: 'No results found.',
  },
} satisfies Story;
