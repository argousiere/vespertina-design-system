import clsx from 'clsx';
import type { ComponentProps } from 'react';
import EmptyState from './EmptyState';
import MenuItem from './MenuItem';
import type { MenuItemProps } from './MenuItem';

export type MenuListOption<T extends string = string> = Omit<
  MenuItemProps,
  'selected' | 'showIcon'
> & {
  value: T;
};

export interface MenuListProps<T extends string = string> extends Omit<
  ComponentProps<'div'>,
  'children'
> {
  options: MenuListOption<T>[];
  value?: T;
  onValueChange?: (value: T) => void;
  showIcon?: boolean;
  emptyMessage?: string;
}

const MenuList = <T extends string = string>({
  options,
  value,
  onValueChange,
  showIcon,
  emptyMessage,
  className,
  'aria-label': ariaLabel,
  ...props
}: MenuListProps<T>) => {
  return (
    <div {...props} className={clsx('ves-menu-list', className)}>
      {options.length > 0 ? (
        <ul role="menu" aria-label={ariaLabel} className="ves-menu-list__items">
          {options.map(({ value: optionValue, ...option }) => {
            return (
              <MenuItem
                key={optionValue}
                {...option}
                className={clsx(option.className, {
                  'ves-menu-list__item--icon-placeholder':
                    showIcon && !option.icon,
                })}
                showIcon={showIcon}
                selected={optionValue === value}
                onClick={(event) => {
                  option.onClick?.(event);
                  if (!option.disabled) {
                    onValueChange?.(optionValue);
                  }
                }}
              />
            );
          })}
        </ul>
      ) : (
        <EmptyState
          message={emptyMessage ?? 'There are no items to display.'}
        />
      )}
    </div>
  );
};

export default MenuList;
