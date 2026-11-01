import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { IconName } from '@core/tokens/icons';
import Icon from './Icon';

export interface EmptyStateProps extends Omit<
  ComponentProps<'div'>,
  'children'
> {
  message?: string;
  icon?: IconName;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  icon,
  className,
  ...props
}) => {
  return (
    <div {...props} className={clsx('ves-empty-state', className)}>
      {icon && <Icon name={icon} className="ves-empty-state__icon" />}
      <span className="ves-empty-state__message">
        {message ?? 'There are no entries to display.'}
      </span>
    </div>
  );
};

export default EmptyState;
