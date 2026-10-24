import clsx from 'clsx';
import type { ComponentProps } from 'react';
import NavList from './NavList';
import type { NavItemModel } from '@core/models/NavItemModel';
import Toolbar from './Toolbar';
import type { ToolbarAction } from './Toolbar';

export interface NavbarProps
  extends Omit<ComponentProps<'header'>, 'title' | 'children'> {
  title: string;
  homeUrl?: string;
  navItems?: NavItemModel[];
  activeUrl?: string;
  actions?: ToolbarAction[];
  onActionTrigger?: (action: ToolbarAction) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  homeUrl = '/',
  navItems = [],
  activeUrl,
  actions = [],
  onActionTrigger,
  className,
  ...props
}) => (
  <header {...props} className={clsx('ves-navbar', className)}>
    <a className="ves-navbar__logo" href={homeUrl}>
      {title}
    </a>
    <div className="ves-navbar__content">
      {navItems.length > 0 && (
        <NavList
          items={navItems}
          activeUrl={activeUrl}
          aria-label="Main navigation menu"
        />
      )}

      {actions.length > 0 && (
        <Toolbar
          actions={actions}
          onActionTrigger={onActionTrigger}
          aria-label="Navbar actions"
        />
      )}
    </div>
  </header>
);

export default Navbar;
