import { format } from 'date-fns';
import { clsx } from 'clsx';
import type { Entry } from '@models/Entry';

export interface EntryListItemProps extends Entry {
  disabled?: boolean;
}

const EntryListItem: React.FC<EntryListItemProps> = ({
  title,
  date,
  url,
  disabled,
}) => {
  const dateISO = date.toISOString();
  const formattedDate = format(date, 'yyyy.MMM.dd');

  const content = (
    <div className="ves-entry-list__item-content">
      <time dateTime={dateISO} className="ves-entry-list__item-date">
        {formattedDate}
      </time>
      <span className="ves-entry-list__item-title text-ellipsis">{title}</span>
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
          aria-label={`${title}, published ${formattedDate}`}
        >
          {content}
        </a>
      )}
    </li>
  );
};

export default EntryListItem;
