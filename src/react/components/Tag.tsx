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
  const { slug, url, description } = tag;
  const tagClassName = clsx(
    'ves-tag',
    { [`ves-tag--${slug}`]: slug },
    className
  );
  const label = <span className="ves-tag__label">{slug}</span>;

  return (
    <Tooltip title={slug} showOnlyWhenTruncated>
      {url ? (
        <a
          rel="tag"
          {...props}
          className={tagClassName}
          href={url}
          title={description}
        >
          {label}
        </a>
      ) : (
        <span {...props} className={tagClassName} title={description}>
          {label}
        </span>
      )}
    </Tooltip>
  );
};

export default Tag;
