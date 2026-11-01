import type { ReactNode } from 'react';
import { DropdownDirection } from '../constants';
import useDropdown from '../hooks/useDropdown';
import type {
  DropdownController,
  UseDropdownOptions,
} from '../hooks/useDropdown';
import Button from './Button';
import type { ButtonProps } from './Button';

export interface DropdownProps extends ButtonProps, UseDropdownOptions {
  direction?: DropdownDirection;
  dropdown?: DropdownController;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  anchor,
  onOpenChange,
  direction,
  dropdown,
  children,
  style,
  ...props
}) => {
  const ownDropdown = useDropdown({ anchor, onOpenChange });
  const { triggerProps, panelProps } = dropdown ?? ownDropdown;

  return (
    <>
      <Button
        {...props}
        {...triggerProps}
        endIcon={
          direction === DropdownDirection.UP ? 'chevron-up' : 'chevron-down'
        }
        style={{ ...style, ...triggerProps.style }}
      />
      <div {...panelProps}>{children}</div>
    </>
  );
};

export default Dropdown;
