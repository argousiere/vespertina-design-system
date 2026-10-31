import type { Meta, StoryObj } from '@storybook/react-vite';

import Label from '@components/Label';
import { iconArgType } from './arg-types/icon';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startIcon: iconArgType,
    endIcon: iconArgType,
    iconOnly: {
      control: 'boolean',
      description:
        'Shows only the icon and uses the text as its accessible name',
    },
  },
  args: {
    iconOnly: false,
    text: 'Search',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const StartIcon = {
  args: {
    startIcon: 'search',
  },
} satisfies Story;

export const EndIcon = {
  args: {
    endIcon: 'chevron-down',
  },
} satisfies Story;

export const IconOnly = {
  args: {
    startIcon: 'search',
    iconOnly: true,
  },
} satisfies Story;

export const TruncatedLabel = {
  args: {
    startIcon: 'search',
    endIcon: 'chevron-down',
    text: 'Truncate this label because it is quite long',
  },
  render: (args) => {
    return (
      <Label
        style={{ width: 200 }}
        startIcon={args.startIcon}
        endIcon={args.endIcon}
        text={args.text}
      />
    );
  },
} satisfies Story;
