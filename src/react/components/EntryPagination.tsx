import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import type { EntryModel } from '@core/models/EntryModel';
import EntryPaginationItem from './EntryPaginationItem';

export interface EntryPaginationProps
  extends Omit<ComponentProps<'nav'>, 'children'> {
  previousEntry?: EntryModel;
  nextEntry?: EntryModel;
  previousSectionLabel?: string;
  nextSectionLabel?: string;
}

const EntryPagination: React.FC<EntryPaginationProps> = ({
  previousEntry,
  nextEntry,
  previousSectionLabel,
  nextSectionLabel,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  if (!previousEntry && !nextEntry) {
    return null;
  }

  return (
    <nav
      {...props}
      className={clsx('ves-entry-pagination', className)}
      aria-label={ariaLabel ?? 'Entry pagination'}
    >
      <EntryPaginationItem
        direction="previous"
        label={previousSectionLabel ?? 'Previous Entry'}
        entry={previousEntry}
      />
      <EntryPaginationItem
        direction="next"
        label={nextSectionLabel ?? 'Next Entry'}
        entry={nextEntry}
      />
    </nav>
  );
};

export default EntryPagination;
