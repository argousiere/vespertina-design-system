import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import SegmentedButtons from '@components/SegmentedButtons';
import { ButtonLevel } from '@core/models/ButtonModel';
import { buttonLevelArgType, buttonLevels } from './arg-types/button';

const meta = {
  title: 'Components/SegmentedButtons',
  component: SegmentedButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      table: { type: { summary: 'SegmentedButtonOption[]' } },
    },
    value: {
      control: 'text',
      description: 'Value of the selected option',
    },
    onValueChange: {
      control: false,
    },
    level: buttonLevelArgType,
  },
  args: {
    level: ButtonLevel.DEFAULT,
    disabled: false,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <SegmentedButtons
        {...args}
        onValueChange={(value) => {
          updateArgs({ value });
          args.onValueChange?.(value);
        }}
      />
    );
  },
} satisfies Meta<typeof SegmentedButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    'aria-label': 'Navigation',
    options: [
      { value: 'previous', label: 'Previous', icon: 'arrow-left' },
      { value: 'next', label: 'Next', icon: 'arrow-right' },
    ],
    value: 'previous',
  },
} satisfies Story;

export const ThreeOptions = {
  args: {
    'aria-label': 'Sort',
    options: [
      { value: 'newest', label: 'Newest' },
      { value: 'oldest', label: 'Oldest' },
      { value: 'title', label: 'Title' },
    ],
    value: 'oldest',
  },
} satisfies Story;

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
} satisfies Story;

export const DisabledOption = {
  args: {
    'aria-label': 'Sort',
    options: [
      { value: 'newest', label: 'Newest' },
      { value: 'oldest', label: 'Oldest', disabled: true },
      { value: 'title', label: 'Title' },
    ],
    value: 'newest',
  },
} satisfies Story;

export const AllLevels = {
  args: ThreeOptions.args,
  render: (args) => (
    <div style={{ display: 'grid', gap: 32 }}>
      {buttonLevels.map((level) => (
        <SegmentedButtons
          key={level}
          {...args}
          level={level}
        />
      ))}
      <SegmentedButtons
          {...args}
          disabled
        />
    </div>
  ),
} satisfies Story;
