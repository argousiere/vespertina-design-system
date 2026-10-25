import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { TagModel } from '@core/models/TagModel';
import Heading from './Heading';

export interface TagHeaderProps
  extends Omit<ComponentProps<'header'>, 'children'> {
  tag: TagModel;
}

const TagHeader: React.FC<TagHeaderProps> = ({ tag, className, ...props }) => (
  <header {...props} className={clsx('ves-page-header', className)}>
    <Heading level="h1" className="ves-page-header__title" label={`#${tag.label ?? tag.slug}`} />
    {tag.description && (
      <p className="ves-page-header__description">{tag.description}</p>
    )}
  </header>
);

export default TagHeader;
