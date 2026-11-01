import clsx from 'clsx';
import React from 'react';
import type { ComponentProps } from 'react';
import type { TagModel } from '@core/models/TagModel';
import Heading from './Heading';
import Tag from './Tag';
import Label from './Label';

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
  const title = tagBoxTitle ?? 'Filed under';

  return (
    <section {...props} className={clsx('ves-tag-box', className)}>
      <Heading
        level="h6"
        className="ves-tag-box__title"
        label={<Label text={title} />}
      />
      <div className="ves-tag-box__tags">
        {tags.map((tag) => {
          return <Tag key={tag.slug} tag={tag} />;
        })}

        {tags.length === 0 && <span>No tags</span>}
      </div>
    </section>
  );
};

export default TagBox;
