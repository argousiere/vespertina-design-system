import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@components/Button';
import { ButtonLevel } from '@core/models/ButtonModel';
import {
  buttonLevelArgType,
  buttonLevels,
  buttonVariantArgType,
  buttonVariants,
} from './arg-types/button';
import { iconArgType } from './arg-types/icon';

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
    icon: iconArgType,
  },
  args: {
    label: 'Button',
    level: ButtonLevel.DEFAULT,
    disabled: false,
  },
  render: ({ icon, ...args}) => (
    <div style={{ display: 'flex', gap: 24 }}>
      {buttonVariants.map((variant) => (
        <Button key={variant} variant={variant} {...args} />
      ))}
      {buttonVariants.map((variant) => (
        <Button key={variant} variant={variant} icon={icon} {...args} />
      ))}
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: { icon: 'search' },
} satisfies Story;

export const Info = {
  args: { level: ButtonLevel.INFO, icon: 'info' },
} satisfies Story;

export const Warning = {
  args: { level: ButtonLevel.WARNING, icon: 'warning' },
} satisfies Story;

export const Danger = {
  args: { level: ButtonLevel.DANGER, icon: 'error' },
} satisfies Story;

export const Success = {
  args: { level: ButtonLevel.SUCCESS, icon: 'check' },
} satisfies Story;

export const Special = {
  args: { level: ButtonLevel.SPECIAL, icon: 'star' },
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
