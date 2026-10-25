import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@components/Button';
import { ButtonLevel } from '@core/models/ButtonModel';
import {
  buttonLevelArgType,
  buttonLevels,
  buttonVariantArgType,
  buttonVariants,
} from './arg-types/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: buttonLevelArgType,
    variant: { ...buttonVariantArgType, control: false },
  },
  args: {
    label: 'Button',
    level: ButtonLevel.DEFAULT,
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 24 }}>
      {buttonVariants.map((variant) => (
        <Button key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Info = {
  args: { level: ButtonLevel.INFO },
} satisfies Story;

export const Warning = {
  args: { level: ButtonLevel.WARNING },
} satisfies Story;

export const Danger = {
  args: { level: ButtonLevel.DANGER },
} satisfies Story;

export const Success = {
  args: { level: ButtonLevel.SUCCESS },
} satisfies Story;

export const Special = {
  args: { level: ButtonLevel.SPECIAL },
} satisfies Story;

export const Disabled = {
  args: { disabled: true },
} satisfies Story;

export const AllLevels = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 32 }}>
      {buttonVariants.flatMap((variant) =>
        [false, true].map((disabled) => (
          <div
            key={`${variant}-${disabled}`}
            style={{ display: 'flex', gap: 24 }}
          >
            {buttonLevels.map((level) => (
              <Button
                key={level}
                {...args}
                level={level}
                variant={variant}
                label={level}
                disabled={disabled}
              />
            ))}
          </div>
        ))
      )}
    </div>
  ),
} satisfies Story;
