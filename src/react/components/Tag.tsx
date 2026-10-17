import clsx from 'clsx';
import React from 'react';
import type { TagModel } from '@core/models/TagModel';
import Tooltip from './Tooltip';

export type TagProps = TagModel;

const Tag: React.FC<TagProps> = ({ slug, description, url }) => {
  const className = clsx('ves-tag', { [`ves-tag--${slug}`]: slug });
  const label = <span className="ves-tag__label">{slug}</span>;

  return (
    <Tooltip title={slug} showOnlyWhenTruncated>
      {url ? (
        <a className={className} href={url} title={description}>
          {label}
        </a>
      ) : (
        <span className={className} title={description}>
          {label}
        </span>
      )}
    </Tooltip>
  );
};

export default Tag;
