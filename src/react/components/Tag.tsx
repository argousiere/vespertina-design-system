import clsx from 'clsx';
import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import type { TagModel } from '@core/models/TagModel';
import Tooltip from './Tooltip';

export interface TagProps
  extends Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'title'> {
  tag: TagModel;
}

const Tag: React.FC<TagProps> = ({ tag, className, ...props }) => {
  const { slug, label = slug, url, description } = tag;
  const tagClassName = clsx(
    'ves-tag',
    { [`ves-tag--${slug}`]: slug },
    className
  );
  const labelEl = <span className="ves-tag__label">{label}</span>;

  return (
    <Tooltip title={label} showOnlyWhenTruncated>
      {url ? (
        <a
          rel="tag"
          {...props}
          className={tagClassName}
          href={url}
          title={description}
        >
          {labelEl}
        </a>
      ) : (
        <span {...props} className={tagClassName} title={description}>
          {labelEl}
        </span>
      )}
    </Tooltip>
  );
};

export default Tag;
