import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';
import Button, { type ButtonProps } from './Button';

export type SegmentedButtonOption<T extends string = string> = ButtonProps & {
  value: T;
}

export interface SegmentedButtonsProps<T extends string = string> extends Omit<
  ComponentProps<'div'>,
  'children'
> {
  options: SegmentedButtonOption<T>[];
  value?: T;
  onValueChange?: (value: T) => void;
  level?: ButtonLevel;
  disabled?: boolean;
  iconOnly?: boolean;
}

const SegmentedButtons = <T extends string = string>({
  options,
  value,
  onValueChange,
  level,
  disabled,
  iconOnly = false,
  className,
  ...props
}: SegmentedButtonsProps<T>) => {

  return (
    <div
      role="group"
      {...props}
      className={clsx(
        'ves-segmented-control',
        { 'ves-segmented-control--icon-only': iconOnly },
        className
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <Button
            key={option.value}
            className={clsx(
              "ves-segmented-control__btn", 
              isSelected ? "ves-segmented-control__btn--selected" : undefined
            )}
            iconOnly={iconOnly}
            label={option.label}
            icon={option.icon}

            level={level}
            variant={
              option.value === value
                ? ButtonVariant.PRIMARY
                : ButtonVariant.SECONDARY
            }
            aria-pressed={isSelected}
            disabled={disabled || option.disabled}
            onClick={() => onValueChange?.(option.value)}
          />
        )
      })}
    </div>
  );
};

export default SegmentedButtons;
