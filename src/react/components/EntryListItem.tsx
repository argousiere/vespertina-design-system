import { clsx } from 'clsx';
import type { ThumbnailModel } from '@core/models/ThumbnailModel';
import DateLabel from './DateLabel';
import { formatDate } from '../utils/date';
import Tooltip from './Tooltip';

export interface EntryListItemProps {
  id: string;
  title: string;
  url: string;
  date: string;
  description?: string;
  thumbnail?: ThumbnailModel;
  disabled?: boolean;
}

const EntryListItem: React.FC<EntryListItemProps> = ({
  title,
  date,
  url,
  disabled,
}) => {
  const formattedDate = formatDate(date);

  const content = (
    <div className="ves-entry-list__item-content">
      <DateLabel date={date} className="ves-entry-list__item-date" />
      <Tooltip title={title} showOnlyWhenTruncated>
        <span className="ves-entry-list__item-title clamp-text">{title}</span>
      </Tooltip>
    </div>
  );

  return (
    <li
      className={clsx('ves-entry-list__item', {
        'ves-entry-list__item--disabled': disabled,
      })}
      aria-disabled={disabled ? 'true' : undefined}
    >
      {disabled ? (
        content
      ) : (
        <a
          className="ves-entry-list__item-link"
          href={url}
          aria-label={
            formattedDate ? `${title}, published ${formattedDate}` : title
          }
        >
          {content}
        </a>
      )}
    </li>
  );
};

export default EntryListItem;
