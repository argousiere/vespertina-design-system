import clsx from 'clsx';
import React from 'react';
import type { ComponentProps } from 'react';
import Heading from './Heading';
import Tag from './Tag';
import type { TagModel } from '@core/models/TagModel';
import Tooltip from './Tooltip';

export interface TagBoxProps extends ComponentProps<'section'> {
  tagBoxTitle?: string;
  tags: TagModel[];
}

const TagBox: React.FC<TagBoxProps> = ({
  tagBoxTitle,
  tags,
  className,
  ...props
}) => {
  return (
    <section {...props} className={clsx('ves-tag-box', className)}>
      <Tooltip title={tagBoxTitle ?? 'Filed under'} showOnlyWhenTruncated>
        <Heading
          level="h6"
          className="ves-tag-box__title"
          label={tagBoxTitle ?? 'Filed under'}
        />
      </Tooltip>
      <div className="ves-tag-box__tags">
        {tags.map((tag) => (
          <Tag key={tag.slug} tag={tag} />
        ))}

        {tags.length === 0 && <span>No tags</span>}
      </div>
    </section>
  );
};

export default TagBox;
