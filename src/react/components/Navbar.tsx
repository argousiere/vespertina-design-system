import NavList from './NavList';
import type { NavListProps } from './NavList';
import Toolbar from './Toolbar';
import type { ToolbarAction } from './Toolbar';

export interface NavbarProps {
  title: string;
  homeUrl?: string;
  navItems?: NavListProps['items'];
  actions?: ToolbarAction[];
  onActionTrigger?: (action: ToolbarAction) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  homeUrl = '/',
  navItems = [],
  actions = [],
  onActionTrigger,
}) => (
  <header className="ves-navbar">
    <a className="ves-navbar__logo" href={homeUrl}>
      {title}
    </a>
    <div className="ves-navbar__content">
      {navItems.length > 0 && (
        <NavList items={navItems} ariaLabel="Main navigation menu" />
      )}

      {actions.length > 0 && (
        <Toolbar 
          actions={actions} 
          onActionTrigger={onActionTrigger} 
          ariaLabel="Navbar actions"/>
      )}
    </div>
  </header>
);

export default Navbar;
