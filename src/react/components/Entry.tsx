import clsx from 'clsx';
import type { TagModel } from '../models/Tag';
import EntryHeader from './EntryHeader';
import type { EntryHeaderProps } from './EntryHeader';
import MarkdownRenderer from './MarkdownRenderer';
import TagBox from './TagBox';

export interface EntryProps
  extends Pick<EntryHeaderProps, 'title' | 'date' | 'readingTime' | 'excerpt'> {
  html: string;
  tags?: TagModel[];
  className?: string;
}

const Entry: React.FC<EntryProps> = ({
  title,
  date,
  readingTime,
  excerpt,
  html,
  tags,
  className,
}) => (
  <article className={clsx('ves-entry', className)}>
    <EntryHeader
      className="ves-entry__header"
      title={title}
      date={date}
      readingTime={readingTime}
      excerpt={excerpt}
    />

    <MarkdownRenderer className="ves-entry-body ves-entry__body" html={html} />

    {tags && tags.length > 0 && (
      <div className="ves-entry__tags">
        <TagBox tags={tags} />
      </div>
    )}
  </article>
);

export default Entry;
