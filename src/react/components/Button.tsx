import React from 'react';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ label, disabled, ariaLabel }) => {
  return (
    <button
      type="button"
      className={`ves-btn`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};

export default Button;
