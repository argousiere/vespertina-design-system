import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';
import type { IconName } from './icons';
import Label from './Label';

export interface ButtonProps extends Omit<
  ComponentProps<'button'>,
  'children'
> {
  label: string;
  icon?: IconName;
  level?: ButtonLevel;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  level = ButtonLevel.DEFAULT,
  variant = ButtonVariant.PRIMARY,
  className,
  ...props
}) => (
  <button
    type="button"
    {...props}
    className={clsx(
      'ves-btn',
      {
        [`ves-btn--${level}`]: level !== ButtonLevel.DEFAULT,
        'ves-btn--primary': variant === ButtonVariant.PRIMARY,
      },
      className
    )}
  >
    <Label text={label} icon={icon} />
  </button>
);

export default Button;
