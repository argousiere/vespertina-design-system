import clsx from 'clsx';
import type { ComponentProps } from 'react';
import Icon from './Icon';
import type { IconName } from './icons';
import Tooltip from './Tooltip';

export interface LabelProps extends Omit<ComponentProps<'div'>, 'children'> {
  text: string;
  icon?: IconName;
  iconOnly?: boolean;
}

const Label: React.FC<LabelProps> = ({
  text,
  icon,
  iconOnly = false,
  className,
  ...props
}) => (
  <Tooltip title={text} showOnlyWhenTruncated>
    <div {...props} className={clsx('ves-label', className)}>
    {icon && (
      <Icon
        name={icon}
        className="ves-label__icon"
        aria-label={iconOnly ? text : undefined}
      />
    )}
    {!(icon && iconOnly) && <span className="ves-label__text clamp-text">{text}</span>}
    </div>
  </Tooltip>
  
);

export default Label;
