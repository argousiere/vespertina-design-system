import type { Meta, StoryObj } from '@storybook/react-vite';

import Tooltip from '@components/Tooltip';
import type { TooltipProps } from '@components/Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
    showOnlyWhenTruncated: false,
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<Omit<TooltipProps, 'children'>>;

export const Default = {
  args: {
    title: 'We are made of starstuff.',
  },
  render: (args) => (
    <Tooltip {...args}>
      <span>Hover, focus or tap.</span>
    </Tooltip>
  ),
} satisfies Story;

export const LongContent = {
  args: {
    title:
      'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
  },
  render: (args) => (
    <Tooltip {...args}>
      <span>Hover, focus or tap.</span>
    </Tooltip>
  ),
} satisfies Story;

export const Disabled = {
  args: {
    title: 'Disabled tooltip',
    disabled: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <span>Hover, focus or tap.</span>
    </Tooltip>
  ),
} satisfies Story;

export const OnlyWhenTruncated = {
  args: {
    title: 'We are made of starstuff.',
    showOnlyWhenTruncated: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tooltip {...args}>
        <span className="clamp-text" style={{ width: 240 }}>
          This will not display a tooltip.
        </span>
      </Tooltip>

      <Tooltip {...args}>
        <span className="clamp-text" style={{ width: 120 }}>
          {args.title}
        </span>
      </Tooltip>
    </div>
  ),
} satisfies Story;
