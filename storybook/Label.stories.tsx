import type { Meta, StoryObj } from '@storybook/react-vite';

import Label from '@components/Label';
import { iconNames } from '@components/icons';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: [undefined, ...iconNames],
    },
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

export const IconAndLabel = {
  args: {
    icon: 'search',
  },
} satisfies Story;

export const IconOnly = {
  args: {
    icon: 'search',
    iconOnly: true,
  },
} satisfies Story;

export const TruncatedLabel = {
  args: {
    icon: 'search',
    text: 'Truncate this label because it is quite long'
  },
  render: (args) => (
    <Label style={{ width: 200 }} icon={args.icon} text={args.text} />
  )
} satisfies Story;
