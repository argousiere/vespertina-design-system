import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import TextInput from '@components/TextInput';
import { iconArgType } from './arg-types/icon';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: iconArgType,
  },
  args: {
    label: 'Label',
    icon: 'search',
    value: 'Text',
    placeholder: 'Placeholder',
    disabled: false,
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);

    return (
      <TextInput
        {...args}
        style={{ maxWidth: 320 }}
        value={value}
        onChange={(event) => {
          return setValue(event.target.value);
        }}
        onClear={() => {
          return setValue('');
        }}
      />
    );
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Placeholder = {
  args: { value: '' },
} satisfies Story;

export const Disabled = {
  args: { disabled: true },
} satisfies Story;

export const WithoutIcon = {
  args: { icon: undefined },
} satisfies Story;

export const TruncatedLabel = {
  args: {
    label: 'Truncate this text input label because it is quite long',
  },
} satisfies Story;

export const WithoutLabel = {
  args: { label: undefined, 'aria-label': 'Search' },
} satisfies Story;
