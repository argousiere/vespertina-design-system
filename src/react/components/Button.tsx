import clsx from 'clsx';
import type { ComponentProps } from 'react';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'children'> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, ...props }) => (
  <button type="button" {...props} className={clsx('ves-btn', className)}>
    {label}
  </button>
);

export default Button;
