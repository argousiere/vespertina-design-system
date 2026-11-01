import clsx from 'clsx';
import type { ComponentProps } from 'react';
import DateLabel from './DateLabel';

export interface DateRangeLabelProps extends Omit<
  ComponentProps<'span'>,
  'children'
> {
  startDate?: string;
  endDate?: string | 'ongoing';
  dateFormat?: string;
}

const DateRangeLabel: React.FC<DateRangeLabelProps> = ({
  startDate,
  endDate,
  dateFormat,
  className,
  ...props
}) => {
  const isOngoing = endDate === 'ongoing';
  const format = dateFormat ?? 'MMM yyyy';

  return (
    <span {...props} className={clsx('ves-date-range-label', className)}>
      {startDate && <DateLabel dateTime={startDate} dateFormat={format} />}

      {startDate && endDate && (
        <>
          <span className="ves-date-range-label__separator">
            <span aria-hidden="true"> – </span>
            <span className="sr-only"> to </span>
          </span>
        </>
      )}

      {isOngoing && <span className="ves-date-label">Present</span>}

      {!isOngoing && endDate && (
        <DateLabel dateTime={endDate} dateFormat={format} />
      )}
    </span>
  );
};

export default DateRangeLabel;
