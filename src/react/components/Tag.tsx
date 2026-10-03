import clsx from 'clsx';
import React from 'react';
import type { TagModel } from '../models/Tag';
import Tooltip from './Tooltip';

export type TagProps = TagModel;

const Tag: React.FC<TagProps> = ({ slug, description }) => {
  const className = clsx('ves-tag', { [`ves-tag--${slug}`]: slug });
  const url = slug ? `tag/${slug}` : '#';

  return (
    <Tooltip title={slug} showOnlyWhenTruncated>
      <a className={className} href={url} title={description}>
        <span className="ves-tag__label">{slug}</span>
      </a>
    </Tooltip>
  );
};

export default Tag;
