import { clsx } from 'clsx';
import Icon from './Icon';

export interface EntryPaginationProps {
  previousTitle?: string;
  previousUrl?: string;
  nextTitle?: string;
  nextUrl?: string;
  previousLabel?: string;
  nextLabel?: string;
}

type Direction = 'previous' | 'next';

const relMap: Record<Direction, string> = {
  previous: 'prev',
  next: 'next',
};

interface EntryPaginationItemProps {
  direction: Direction;
  label: string;
  title?: string;
  url?: string;
}

const EntryPaginationItem: React.FC<EntryPaginationItemProps> = ({
  direction,
  label,
  title,
  url,
}) => (
  <div
    className={clsx(
      'ves-entry-pagination__item',
      `ves-entry-pagination__item--${direction}`
    )}
  >
    {title && url && (
      <a
        className="ves-entry-pagination__link"
        href={url}
        rel={relMap[direction]}
      >
        {direction === 'previous' && <Icon name="arrow-left" />}
        <span className="ves-entry-pagination__details">
          <span className="ves-entry-pagination__label">{label}</span>
          <span className="ves-entry-pagination__title clamp-text">
            {title}
          </span>
        </span>
        {direction === 'next' && <Icon name="arrow-right" />}
      </a>
    )}
  </div>
);

const EntryPagination: React.FC<EntryPaginationProps> = ({
  previousTitle,
  previousUrl,
  nextTitle,
  nextUrl,
  previousLabel = 'Older Post',
  nextLabel = 'Newer Post',
}) => {
  if (!(previousTitle && previousUrl) && !(nextTitle && nextUrl)) {
    return null;
  }

  return (
    <nav className="ves-entry-pagination" aria-label="Entry pagination">
      <EntryPaginationItem
        direction="previous"
        label={previousLabel}
        title={previousTitle}
        url={previousUrl}
      />
      <EntryPaginationItem
        direction="next"
        label={nextLabel}
        title={nextTitle}
        url={nextUrl}
      />
    </nav>
  );
};

export default EntryPagination;
