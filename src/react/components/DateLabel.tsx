import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { formatDate, INVALID_DATE_LABEL, ISO_DAY_FORMAT } from '@core/utils/date';

export interface DateLabelProps extends Omit<
  ComponentPropsWithoutRef<'time'>,
  'children'
> {
  dateTime: string;
  dateFormat?: string;
}

const DateLabel: React.FC<DateLabelProps> = ({
  dateTime,
  dateFormat,
  className,
  ...props
}) => {
  const text = formatDate(dateTime, dateFormat);

  if (!text) {
    return (
      <span {...props} className={clsx('ves-date-label', className)}>
        {INVALID_DATE_LABEL}
      </span>
    );
  }

  return (
    <time
      {...props}
      className={clsx('ves-date-label', className)}
      dateTime={formatDate(dateTime, ISO_DAY_FORMAT) ?? undefined}
    >
      {text}
    </time>
  );
};

export default DateLabel;
