import clsx from 'clsx';

export interface NavListItemProps {
  label: string;
  url: string;
  active?: boolean;
  focused?: boolean;
}

const NavListItem: React.FC<NavListItemProps> = ({
  label,
  url,
  active = false,
  focused = false,
}) => (
  <li
    className={clsx('ves-nav-list-item', {
      'ves-nav-list-item--active': active,
      'ves-nav-list-item--focused': focused,
    })}
  >
    <a
      className="ves-nav-list-item__link"
      href={url}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </a>
  </li>
);

export default NavListItem;
