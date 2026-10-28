import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';
import type { IconName } from '@core/tokens/icons';
import Label from './Label';

export interface ButtonProps extends Omit<
  ComponentProps<'button'>,
  'children'
> {
  label: string;
  icon?: IconName;
  iconOnly?: boolean;
  level?: ButtonLevel;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconOnly,
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
        'ves-btn--icon-only': iconOnly
      },
      className
    )}
  >
    <Label text={label} icon={icon} />
  </button>
);

export default Button;
