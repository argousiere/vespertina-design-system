import clsx from 'clsx';

export interface ReadingTimeProps {
  minutes: number;
  className?: string;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ minutes, className }) => (
  <span className={clsx('ves-reading-time', className)}>
    {minutes} min read
  </span>
);

export default ReadingTime;
