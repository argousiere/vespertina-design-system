import clsx from 'clsx';
import DateLabel from './DateLabel';
import ReadingTime from './ReadingTime';

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
        {!!readingTimeWPM && <ReadingTime minutes={readingTimeWPM} />}
      </div>
      {title && <h1 className="ves-entry-header__title">{title}</h1>}
      {excerpt && <p className="ves-entry-header__excerpt">{excerpt}</p>}
    </header>
  );
};

export default EntryHeader;
