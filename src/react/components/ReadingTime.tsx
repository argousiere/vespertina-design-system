import clsx from 'clsx';

export interface ReadingTimeProps {
  minutes: number;
  abbreviated?: boolean;
  className?: string;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({
  minutes,
  abbreviated = true,
  className,
}) => {
  const duration = new Intl.NumberFormat('en', {
    style: 'unit',
    unit: 'minute',
    unitDisplay: abbreviated ? 'short' : 'long',
  }).format(minutes);

  return (
    <span className={clsx('ves-reading-time', className)}>
      {duration} read
    </span>
  );
};

export default ReadingTime;
