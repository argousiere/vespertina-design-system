import clsx from 'clsx';
import type { ComponentProps } from 'react';

export interface ReadingTimeProps
  extends Omit<ComponentProps<'span'>, 'children'> {
  minutes: number;
  abbreviated?: boolean;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({
  minutes,
  abbreviated = true,
  className,
  ...props
}) => {
  const duration = new Intl.NumberFormat('en', {
    style: 'unit',
    unit: 'minute',
    unitDisplay: abbreviated ? 'short' : 'long',
  }).format(minutes);

  return (
    <span {...props} className={clsx('ves-reading-time', className)}>
      {duration} read
    </span>
  );
};

export default ReadingTime;
