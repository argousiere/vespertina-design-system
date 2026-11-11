import clsx from 'clsx';
import type { ComponentProps } from 'react';

export type CardBodyProps = ComponentProps<'div'>;

const CardBody: React.FC<CardBodyProps> = ({ className, ...props }) => {
  return <div {...props} className={clsx('ves-card__body', className)} />;
};

export default CardBody;
