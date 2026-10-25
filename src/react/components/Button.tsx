import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';

export interface ButtonProps extends Omit<
  ComponentProps<'button'>,
  'children'
> {
  label: string;
  level?: ButtonLevel;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  label,
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
    {label}
  </button>
);

export default Button;
