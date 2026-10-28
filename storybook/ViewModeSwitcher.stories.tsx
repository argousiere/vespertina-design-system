import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import ViewModeSwitcher from '@components/ViewModeSwitcher';
import { ButtonLevel } from '@core/models/ButtonModel';
import { buttonLevelArgType, buttonLevels } from './arg-types/button';

const meta = {
  title: 'Components/ViewModeSwitcher',
  component: ViewModeSwitcher,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      table: { type: { summary: 'SegmentedButtonOption[]' } },
    },
    value: {
      control: 'select',
      description: 'Value of the selected view mode',
      options: ['list', 'grid'],
    },
    onValueChange: {
      control: false,
    },
    level: buttonLevelArgType,
  },
  args: {
    options: [
      { value: 'list', label: 'List', icon: 'list' },
      { value: 'grid', label: 'Grid', icon: 'grid' },
    ],
    disabled: false,
    value: 'list',
    level: ButtonLevel.DEFAULT,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <ViewModeSwitcher
        {...args}
        onValueChange={(value) => {
          updateArgs({ value });
          args.onValueChange?.(value);
        }}
      />
    );
  },
} satisfies Meta<typeof ViewModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const CustomOptions = {
  args: {
    options: [
      { value: 'project-view', label: 'Project View', icon: 'project' },
      { value: 'compact-view', label: 'List', icon: 'list' },
    ],
    value: 'list',
  }
} satisfies Story;

export const IconOnly = {
  args: { iconOnly: true },
} satisfies Story;

export const AllLevels = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 32 }}>
      {buttonLevels.map((level) => (
        <ViewModeSwitcher key={level} {...args} level={level} />
      ))}
    </div>
  ),
} satisfies Story;
