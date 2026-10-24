import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { NavItemModel } from '@core/models/NavItemModel';
import NavListItem from './NavListItem';

export interface NavListProps extends Omit<ComponentProps<'nav'>, 'children'> {
  items: NavItemModel[];
  activeUrl?: string;
}

const NavList: React.FC<NavListProps> = ({
  items,
  activeUrl,
  className,
  'aria-label': ariaLabel,
  ...props
}) => (
  <nav
    {...props}
    className={clsx('ves-nav-list', className)}
    aria-label={ariaLabel ?? 'Navigation'}
  >
    <ul className="ves-nav-list__items">
      {items.map((item) => (
        <NavListItem
          key={item.url}
          item={item}
          active={item.url === activeUrl}
        />
      ))}
    </ul>
  </nav>
);

export default NavList;
