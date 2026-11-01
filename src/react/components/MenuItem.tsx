import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { IconName } from '@core/tokens/icons';
import Icon from './Icon';
import Label from './Label';

export interface MenuItemProps extends Omit<ComponentProps<'li'>, 'children'> {
  label: string;
  icon?: IconName;
  showIcon?: boolean;
  active?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  showIcon,
  active,
  selected,
  disabled,
  className,
  ...props
}) => {
  return (
    <li
      role="menuitemradio"
      aria-label={label}
      aria-checked={selected}
      aria-disabled={disabled || undefined}
      tabIndex={0}
      {...props}
      className={clsx(
        'ves-menu-item',
        {
          'ves-menu-item--active': active,
          'ves-menu-item--selected': selected,
          'ves-menu-item--disabled': disabled,
        },
        className
      )}
    >
      <Label
        className="ves-menu-item__label"
        text={label}
        startIcon={showIcon ? icon : undefined}
      />
      {selected && <Icon name="check" className="ves-menu-item__check" />}
    </li>
  );
};

export default MenuItem;
