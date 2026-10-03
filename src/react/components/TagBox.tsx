import React from 'react';
import type { TagModel } from '../models/Tag';
import Tag from './Tag';
import Tooltip from './Tooltip';

export interface TagBoxProps {
  title?: string;
  tags: TagModel[];
}

const TagBox: React.FC<TagBoxProps> = ({ title = 'Filed under', tags }) => {
  return (
    <section className="ves-tag-box">
      <Tooltip title={title} showOnlyWhenTruncated>
        <h6 className="ves-tag-box__title">{title}</h6>
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
