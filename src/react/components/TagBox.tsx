import React from 'react';
import type { TagModel } from '@core/models/TagModel';
import Tag from './Tag';
import Tooltip from './Tooltip';

export interface TagBoxProps {
  tagBoxTitle?: string;
  tags: TagModel[];
}

const TagBox: React.FC<TagBoxProps> = ({ title = 'Filed under', tags }) => {
  tagBoxTitle = 'Filed under',
  tags,
  return (
    <section className="ves-tag-box">
      <Tooltip title={tagBoxTitle} showOnlyWhenTruncated>
        <Heading level="h6" className="ves-tag-box__title">
          {tagBoxTitle}
        </Heading>
      </Tooltip>
      <div className="ves-tag-box__tags">
        {tags.map((tag) => (
          <Tag key={tag.slug} {...tag} />
        ))}

        {tags.length === 0 && <span>No tags</span>}
      </div>
    </section>
  );
};

export default TagBox;
