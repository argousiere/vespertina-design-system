import type { Meta, StoryObj } from '@storybook/react-vite';

import Tooltip from '@components/Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'We are made of starstuff.',
    disabled: false,
    showOnlyWhenTruncated: false,
    children: 'Hover, focus or tap.',
  },
  argTypes: {
    title: {
      description:
        'Text to display in the tooltip. By default, when not provided, content text will be displayed.',
    },
    disabled: { description: 'Tooltip will not be triggered.' },
    showOnlyWhenTruncated: {
      description: 'Display only when the content is truncated.',
    },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const TextContentAsTitle = {
  args: {
    title: undefined,
    showOnlyWhenTruncated: true,
    className: 'clamp-text',
    style: { width: 120 },
    children: 'The tooltip repeats this text when it is cut off.',
  },
} satisfies Story;

export const LongText = {
  args: {
    title:
      'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
  },
} satisfies Story;

export const Disabled = {
  args: {
    title: 'Disabled tooltip',
    disabled: true,
  },
} satisfies Story;

export const OnlyWhenTruncated = {
  args: {
    showOnlyWhenTruncated: true,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Tooltip {...args} className="clamp-text" style={{ width: 240 }}>
          This will not display a tooltip.
        </Tooltip>

        <Tooltip {...args} className="clamp-text" style={{ width: 120 }}>
          {args.title}
        </Tooltip>
      </div>
    );
  },
} satisfies Story;
