import clsx from 'clsx';
import { formatDate, INVALID_DATE_LABEL, ISO_DAY_FORMAT } from '../utils/date';

export interface DateLabelProps {
  date: string;
  dateFormat?: string;
  className?: string;
}

const DateLabel: React.FC<DateLabelProps> = ({
  date,
  dateFormat,
  className,
}) => {
  const text = formatDate(date, dateFormat);

  if (!text) {
    return (
      <span
        className={clsx('ves-date-label', className)}
      >{INVALID_DATE_LABEL}</span>
    );
  }

  return (
    <time
      className={clsx('ves-date-label', className)}
      dateTime={formatDate(date, ISO_DAY_FORMAT) ?? undefined}
    >
      {text}
    </time>
  );
};

export default DateLabel;
