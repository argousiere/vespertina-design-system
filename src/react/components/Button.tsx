import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';
import type { IconName } from '@core/tokens/icons';
import Label, { type LabelOptions } from './Label';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'children'>, LabelOptions {
  icon?: IconName;
  endIcon?: IconName;
  level?: ButtonLevel;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  endIcon,
  iconOnly,
  level,
  variant,
  className,
  ...props
}) => {
  const resolvedLevel = level ?? ButtonLevel.DEFAULT;
  const resolvedVariant = variant ?? ButtonVariant.PRIMARY;
  const isIconOnly = Boolean((iconOnly || !text) && (icon || endIcon));

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
          'ves-btn--icon-only': isIconOnly,
        },
        className
      )}
    >
      <Label
        text={text}
        startIcon={icon}
        endIcon={endIcon}
        iconOnly={iconOnly}
      />
    </button>
  );
};

export default Button;
