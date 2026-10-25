import clsx from 'clsx';
import type { ComponentProps } from 'react';
import Icon from './Icon';
import type { IconName } from './icons';

export interface LabelProps extends Omit<ComponentProps<'span'>, 'children'> {
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
  <span {...props} className={clsx('ves-label', className)}>
    {icon && (
      <Icon
        name={icon}
        className="ves-label__icon"
        aria-label={iconOnly ? text : undefined}
      />
    )}
    {!(icon && iconOnly) && <span className="ves-label__text">{text}</span>}
  </span>
);

export default Label;
