import clsx from 'clsx';
import React from 'react';
import type { TagModel } from '@models/Tag';

export type TagProps = TagModel;

const Tag: React.FC<TagProps> = ({ slug, description }) => {
  const className = clsx('ves-tag', { [`ves-tag--${slug}`]: slug });
  const url = slug ? `tag/${slug}` : '#';

  return (
    <a className={className} href={url} title={description}>
      {slug}
    </a>
  );
};

export default Tag;
