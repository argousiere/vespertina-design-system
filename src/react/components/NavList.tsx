import NavListItem from './NavListItem';
import type { NavListItemProps } from './NavListItem';

export interface NavListProps {
  items: Omit<NavListItemProps, 'focused'>[];
  ariaLabel?: string;
}

const NavList: React.FC<NavListProps> = ({
  items,
  ariaLabel = 'Navigation',
}) => (
  <nav className="ves-nav-list" aria-label={ariaLabel}>
    <ul className="ves-nav-list__items">
      {items.map((item) => (
        <NavListItem key={item.url} {...item} />
      ))}
    </ul>
  </nav>
);

export default NavList;
