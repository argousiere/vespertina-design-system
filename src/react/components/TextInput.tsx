import clsx from 'clsx';
import { useId, useRef } from 'react';
import type { ComponentProps } from 'react';
import { ButtonVariant } from '@core/models/ButtonModel';
import type { IconName } from '@core/tokens/icons';
import Button from './Button';
import Icon from './Icon';
import Label from './Label';

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'value'> {
  value: string;
  label?: string;
  icon?: IconName;
  clearLabel?: string;
  onClear?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  label,
  icon,
  clearLabel,
  onClear,
  disabled,
  id,
  className,
  style,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  const clear = () => {
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <div className={clsx('ves-text-input', className)} style={style}>
      {label && (
        <label className="ves-text-input__label" htmlFor={inputId}>
          <Label startIcon={icon} text={label} />
        </label>
      )}
      <div
        className={clsx('ves-text-input__field', {
          'ves-text-input__field--disabled': disabled,
        })}
      >
        {icon && <Icon name={icon} className="ves-text-input__icon" />}
        <input
          type="text"
          {...props}
          ref={inputRef}
          id={inputId}
          className="ves-text-input__control"
          value={value}
          disabled={disabled}
        />
        {onClear && value && !disabled && (
          <Button
            className="ves-text-input__clear"
            variant={ButtonVariant.BASIC}
            label={clearLabel ?? 'Clear'}
            icon="close"
            iconOnly
            onClick={clear}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
