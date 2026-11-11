import clsx from 'clsx';
import type { ComponentProps } from 'react';
import EmptyState from './EmptyState';

export type CardProps = ComponentProps<'div'> & {
  emptyMessage?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  emptyMessage,
  ...props
}) => {
  return (
    <div {...props} className={clsx('ves-card', className)}>
      {children}

      {!children && <EmptyState message={emptyMessage ?? 'Card is empty'} />}
    </div>
  );
};

export default Card;
