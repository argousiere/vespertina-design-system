import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import type { EntryModel } from '@core/models/EntryModel';
import Icon from './Icon';

export type EntryPaginationDirection = 'previous' | 'next';

export interface EntryPaginationItemProps
  extends Omit<ComponentProps<'div'>, 'children'> {
  direction: EntryPaginationDirection;
  label: string;
  entry?: EntryModel;
}

const relMap: Record<EntryPaginationDirection, string> = {
  previous: 'prev',
  next: 'next',
};

const EntryPaginationItem: React.FC<EntryPaginationItemProps> = ({
  direction,
  label,
  entry,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      'ves-entry-pagination__item',
      `ves-entry-pagination__item--${direction}`,
      className
    )}
  >
    {entry && (
      <a
        className="ves-entry-pagination__link"
        href={entry.url}
        rel={relMap[direction]}
      >
        {direction === 'previous' && <Icon name="arrow-left" />}
        <span className="ves-entry-pagination__details">
          <span className="ves-entry-pagination__label">{label}</span>
          <span className="ves-entry-pagination__title clamp-text">
            {entry.title}
          </span>
        </span>
        {direction === 'next' && <Icon name="arrow-right" />}
      </a>
    )}
  </div>
);

export default EntryPaginationItem;
