import clsx from 'clsx';
import { useId, type ComponentProps } from 'react';
import Icon from './Icon';
import NavList from './NavList';
import type { NavItemModel } from '@core/models/NavItemModel';
import Toolbar from './Toolbar';
import type { ToolbarAction } from './Toolbar';

export interface NavbarProps extends Omit<
  ComponentProps<'header'>,
  'title' | 'children'
> {
  title: string;
  homeUrl?: string;
  navItems?: NavItemModel[];
  activeUrl?: string;
  currentUrl?: string;
  actions?: ToolbarAction[];
  onActionTrigger?: (action: ToolbarAction) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  homeUrl = '/',
  navItems = [],
  activeUrl,
  currentUrl,
  actions = [],
  onActionTrigger,
  className,
  ...props
}) => {
  const menuId = useId();

  return (
    <header {...props} className={clsx('ves-navbar', className)}>
      <a className="ves-navbar__logo" href={homeUrl}>
        {title}
      </a>

      <button
        type="button"
        className="ves-navbar__menu-btn ves-navbar__menu-btn--open"
        popoverTarget={menuId}
        popoverTargetAction="show"
        aria-label="Open menu"
      >
        <Icon name="menu" />
      </button>

      <div id={menuId} popover="auto" className="ves-navbar__content">
        <button
          type="button"
          className="ves-navbar__menu-btn ves-navbar__menu-btn--close"
          popoverTarget={menuId}
          popoverTargetAction="hide"
          aria-label="Close menu"
        >
          <Icon name="close" />
        </button>
        
        {navItems.length > 0 && (
          <NavList
            items={navItems}
            activeUrl={activeUrl}
            currentUrl={currentUrl}
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
};

export default Navbar;
