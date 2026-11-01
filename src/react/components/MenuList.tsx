import clsx from 'clsx';
import type { ComponentProps } from 'react';
import EmptyState from './EmptyState';
import MenuItem from './MenuItem';
import type { MenuItemProps } from './MenuItem';

export type MenuListOption<T extends string = string> = Omit<
  MenuItemProps,
  'showIcon'
> & {
  value: T;
};

export interface MenuListProps<T extends string = string> extends Omit<
  ComponentProps<'div'>,
  'children'
> {
  options: MenuListOption<T>[];
  onMenuItemClick?: (value: T) => void;
  showIcon?: boolean;
  emptyMessage?: string;
}

const MenuList = <T extends string = string>({
  options,
  onMenuItemClick,
  showIcon,
  emptyMessage,
  className,
  'aria-label': ariaLabel,
  ...props
}: MenuListProps<T>) => {
  return (
    <div {...props} className={clsx('ves-menu-list', className)}>
      {options.length === 0 && (
        <EmptyState
          message={emptyMessage ?? 'There are no items to display.'}
        />
      )}

      {options.length > 0 && (
        <ul role="menu" aria-label={ariaLabel} className="ves-menu-list__items">
          {options.map((option) => {
            const { value: optionValue, ...itemProps } = option;

            return (
              <MenuItem
                key={optionValue}
                {...itemProps}
                className={clsx(option.className, {
                  'ves-menu-list__item--icon-placeholder':
                    showIcon && !option.icon,
                })}
                showIcon={showIcon}
                onClick={(event) => {
                  option.onClick?.(event);

                  if (!option.disabled) {
                    onMenuItemClick?.(optionValue);
                  }
                }}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MenuList;
