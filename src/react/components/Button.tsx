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
  level,
  variant,
  className,
  ...props
}) => {
  const resolvedLevel = level ?? ButtonLevel.DEFAULT;
  const resolvedVariant = variant ?? ButtonVariant.PRIMARY;

  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'ves-btn',
        {
          [`ves-btn--${resolvedLevel}`]: resolvedLevel !== ButtonLevel.DEFAULT,
          'ves-btn--primary': resolvedVariant === ButtonVariant.PRIMARY,
          'ves-btn--basic': resolvedVariant === ButtonVariant.BASIC,
          'ves-btn--icon-only': iconOnly,
        },
        className
      )}
    >
      <Label text={label} icon={icon} iconOnly={iconOnly} />
    </button>
  );
};

export default Button;
