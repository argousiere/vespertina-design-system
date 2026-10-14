import { icons, type IconName } from './icons';
import Icon from './Icon';

export interface ToolbarAction {
  name: string;
  data?: unknown;
}

export interface ToolbarProps {
  actions: ToolbarAction[];
  onActionTrigger?: (action: ToolbarAction) => void;
  ariaLabel?: string;
}

const isIconName = (name: string): name is IconName => name in icons;

const Toolbar: React.FC<ToolbarProps> = ({
  actions,
  onActionTrigger,
  ariaLabel = 'Toolbar',
}) => (
  <div className="ves-toolbar" role="toolbar" aria-label={ariaLabel}>
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
