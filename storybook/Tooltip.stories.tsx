import type { Meta, StoryObj } from '@storybook/react-vite';

import Tooltip from '@components/Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { disable: true } },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'We are made of starstuff.',
    children: <span>Hover, focus or tap.</span>,
  },
} satisfies Story;

export const LongContent = {
  args: {
    title:
      'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
    children: <span>Hover, focus or tap.</span>,
  },
} satisfies Story;

export const Disabled = {
  args: {
    title: 'Disabled tooltip',
    disabled: true,
    children: <span>Tooltip is disabled.</span>,
  },
} satisfies Story;

export const OnlyWhenTruncated = {
  args: {
    title: 'We are made of starstuff.',
    showOnlyWhenTruncated: true,
    children: <span />,
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
          We are made of starstuff.
        </span>
      </Tooltip>
    </div>
  ),
} satisfies Story;
