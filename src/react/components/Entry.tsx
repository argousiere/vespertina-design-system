import clsx from 'clsx';
import EntryHeader from './EntryHeader';
import TagBox from './TagBox';
import type { TagModel } from '@core/models/TagModel';

export interface EntryProps {
  title?: string;
  date?: string;
  html: string;
  excerpt?: string;
  readingTimeWPM: number;
  tags?: TagModel[];
  className?: string;
}

const Entry: React.FC<EntryProps> = ({
  title,
  date,
  html,
  excerpt,
  readingTimeWPM,
  tags,
  className,
}) => {
  if (!html) {
    console.warn(`Entry: no registered markdown file for "${!html}"`);
    return null;
  }

  return (
    <article className={clsx('ves-entry', className)}>
      <EntryHeader
        className="ves-entry__header"
        title={title}
        date={date}
        readingTimeWPM={readingTimeWPM}
        excerpt={excerpt}
      />

      <div
        className="ves-entry-body ves-entry__body"
        dangerouslySetInnerHTML={{ __html: html }}
      />


      {tags && tags.length > 0 && (
        <div className="ves-entry__tags">
          <TagBox tags={tags} />
        </div>
      )}
    </article>
  );
};

export default Entry;
