import clsx from 'clsx';
import type { ComponentProps } from 'react';

export type CardFooterProps = ComponentProps<'footer'>;

const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => {
  return <footer {...props} className={clsx('ves-card__footer', className)} />;
};

export default CardFooter;
