import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';
import Button, { type ButtonProps } from './Button';

export type SegmentedButtonOption<T = string> = ButtonProps & {
  value: T;
}

export interface SegmentedButtonsProps<T = string> extends Omit<
  ComponentProps<'div'>,
  'children'
> {
  options: SegmentedButtonOption<T>[];
  value?: T;
  onValueChange?: (value: T) => void;
  level?: ButtonLevel;
  disabled?: boolean;
}

const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({
  options,
  value,
  onValueChange,
  level,
  disabled,
  className,
  ...props
}) => {

  return (
    <div
      role="group"
      {...props}
      className={clsx('ves-segmented-control', className)}
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
