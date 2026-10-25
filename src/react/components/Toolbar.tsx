import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { icons, type IconName } from '@core/tokens/icons';
import Icon from './Icon';

export interface ToolbarAction {
  name: string;
  data?: unknown;
}

export interface ToolbarProps extends Omit<ComponentProps<'div'>, 'children'> {
  actions: ToolbarAction[];
  onActionTrigger?: (action: ToolbarAction) => void;
}

const isIconName = (name: string): name is IconName => name in icons;

const Toolbar: React.FC<ToolbarProps> = ({
  actions,
  onActionTrigger,
  className,
  'aria-label': ariaLabel,
  ...props
}) => (
  <div
    role="toolbar"
    {...props}
    className={clsx('ves-toolbar', className)}
    aria-label={ariaLabel ?? 'Toolbar'}
  >
    {actions.map((action) => (
      <button
        key={action.name}
        type="button"
        className="ves-toolbar__action"
        aria-label={action.name}
        onClick={() => onActionTrigger?.(action)}
      >
        {isIconName(action.name) ? (
          <Icon name={action.name} />
        ) : (
          <span className="ves-toolbar__label">{action.name}</span>
        )}
      </button>
    ))}
  </div>
);

export default Toolbar;
