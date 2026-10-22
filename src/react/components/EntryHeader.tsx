import clsx from 'clsx';
import DateLabel from './DateLabel';

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
  return (
    <header className={clsx('ves-entry__header', className)}>
      <div className="ves-entry-header__meta">
        {date && <DateLabel date={date} dateFormat="dd.MMM.yyyy" />}
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
