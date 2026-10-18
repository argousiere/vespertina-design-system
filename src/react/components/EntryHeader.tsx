import clsx from 'clsx';
import { format, parse } from 'date-fns';

export interface EntryHeaderProps {
  title?: string;
  date?: string;
  excerpt?: string;
  readingTimeWPM?: number;
  className?: string;
}

const EntryHeader: React.FC<EntryHeaderProps> = ({
  title,
  date,
  readingTimeWPM,
  excerpt,
  className,
}) => {
  const day = date?.slice(0, 10);
  const published = day && parse(day, 'yyyy-MM-dd', new Date());

  return (
    <header className={clsx('ves-entry-header', className)}>
      <div className="ves-entry-header__meta">
        {day && published && (
          <time className="ves-entry-header__meta-item" dateTime={day}>
            {format(published, 'dd.MMM.yyyy')}
          </time>
        )}
        {readingTimeWPM && (
          <span className="ves-entry-header__meta-item">
            {readingTimeWPM} min read
          </span>
        )}
      </div>
      {title && <h1 className="ves-entry-header__title">{title}</h1>}
      {excerpt && <p className="ves-entry-header__excerpt">{excerpt}</p>}
    </header>
  );
};

export default EntryHeader;
