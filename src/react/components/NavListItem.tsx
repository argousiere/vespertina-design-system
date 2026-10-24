import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { NavItemModel } from '@core/models/NavItemModel';

export interface NavListItemProps
  extends Omit<ComponentProps<'li'>, 'children'> {
  item: NavItemModel;
  active?: boolean;
  focused?: boolean;
}

const NavListItem: React.FC<NavListItemProps> = ({
  item,
  active = false,
  focused = false,
  className,
  ...props
}) => (
  <li
    {...props}
    className={clsx(
      'ves-nav-list-item',
      {
        'ves-nav-list-item--active': active,
        'ves-nav-list-item--focused': focused,
      },
      className
    )}
  >
    <a
      className="ves-nav-list-item__link"
      href={item.url}
      aria-current={active ? 'page' : undefined}
    >
      {item.label}
    </a>
  </li>
);

export default NavListItem;
