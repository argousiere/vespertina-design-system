import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { EntryModel } from '@core/models/EntryModel';
import DateLabel from './DateLabel';
import Heading from './Heading';
import ReadingTime from './ReadingTime';

export interface EntryHeaderProps
  extends Omit<ComponentProps<'header'>, 'children'> {
  entry: EntryModel;
  description?: string;
}

const EntryHeader: React.FC<EntryHeaderProps> = ({
  entry,
  className,
  ...props
}) => {
  const { title, date, readingTimeMinutes, description } = entry;

  return (
    <header {...props} className={clsx('ves-page-header', 'ves-entry__header', className)}>
      <div className="ves-entry-header__meta">
        {date && <DateLabel dateTime={date} dateFormat="dd.MMM.yyyy" />}
        {!!readingTimeMinutes && <ReadingTime minutes={readingTimeMinutes} />}
      </div>
      {title && (
        <Heading level="h1" className="ves-page-header__title" label={title} />
      )}
      {description && <p className="ves-page-header__description">{description}</p>}
    </header>
  );
};

export default EntryHeader;
