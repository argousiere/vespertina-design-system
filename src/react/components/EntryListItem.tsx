import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import type { EntryModel } from '@core/models/EntryModel';
import DateLabel from './DateLabel';
import { formatDate } from '@core/utils/date';
import Tooltip from './Tooltip';

export interface EntryListItemProps
  extends Omit<ComponentProps<'li'>, 'children'> {
  entry: EntryModel;
  disabled?: boolean;
}

const EntryListItem: React.FC<EntryListItemProps> = ({
  entry,
  disabled,
  className,
  ...props
}) => {
  const { title, date, url } = entry;
  const formattedDate = formatDate(date);

  const content = (
    <div className="ves-entry-list__item-content">
      <DateLabel dateTime={date} className="ves-entry-list__item-date" />
      <Tooltip title={title} showOnlyWhenTruncated>
        <span className="ves-entry-list__item-title clamp-text">{title}</span>
      </Tooltip>
    </div>
  );

  return (
    <li
      {...props}
      className={clsx(
        'ves-entry-list__item',
        {
          'ves-entry-list__item--disabled': disabled,
        },
        className
      )}
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
