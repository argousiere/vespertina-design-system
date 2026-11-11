import clsx from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import type { HeadingLevel } from './Heading';
import Heading from './Heading';

export interface CardHeaderProps extends Omit<
  ComponentProps<'header'>,
  'children' | 'title'
> {
  title: ReactNode;
  titleMeta?: ReactNode;
  subtitle?: ReactNode;
  subtitleMeta?: ReactNode;
  headingLevel?: HeadingLevel;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  titleMeta,
  subtitle,
  subtitleMeta,
  headingLevel,
  className,
  ...props
}) => {
  return (
    <header {...props} className={clsx('ves-card__header', className)}>
      <Heading level={headingLevel} className="ves-card__title" label={title} />

      {titleMeta && (
        <div className="ves-card__meta ves-card__title-meta">{titleMeta}</div>
      )}

      {subtitle && <p className="ves-card__subtitle">{subtitle}</p>}

      {subtitleMeta && (
        <div className="ves-card__meta ves-card__subtitle-meta">
          {subtitleMeta}
        </div>
      )}
    </header>
  );
};

export default CardHeader;
