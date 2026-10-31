import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { IconName } from '@core/tokens/icons';
import Icon from './Icon';
import Tooltip from './Tooltip';

export interface LabelProps extends Omit<ComponentProps<'div'>, 'children'> {
  text: string;
  startIcon?: IconName;
  endIcon?: IconName;
  iconOnly?: boolean;
}

const Label: React.FC<LabelProps> = ({
  text,
  startIcon,
  endIcon,
  iconOnly,
  className,
  ...props
}) => {
  return (
    <Tooltip title={text} showOnlyWhenTruncated>
      <div {...props} className={clsx('ves-label', className)}>
        {startIcon && (
          <Icon
            name={startIcon}
            className="ves-label__icon"
            aria-label={iconOnly ? text : undefined}
          />
        )}
        {!(startIcon && iconOnly) && (
          <span className="ves-label__text clamp-text">{text}</span>
        )}
        {endIcon && !iconOnly && (
          <Icon name={endIcon} className="ves-label__icon" />
        )}
      </div>
    </Tooltip>
  );
};

export default Label;
