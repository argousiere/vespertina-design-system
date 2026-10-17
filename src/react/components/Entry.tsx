import clsx from 'clsx';
import { getEntry } from '@core/scripts/entries-registry';
import type { TagModel } from '../models/Tag';
import EntryBody from './EntryBody';
import EntryHeader from './EntryHeader';
import TagBox from './TagBox';

export interface EntryProps {
  src: string;
  className?: string;
}

const toTag = (name: string): TagModel => ({
  slug: name.trim().toLowerCase().replace(/\s+/g, '-'),
});

const Entry: React.FC<EntryProps> = ({ src, className }) => {
  const entry = getEntry(src);

  if (!entry) {
    console.warn(`Entry: no registered markdown file for "${src}"`);
    return null;
  }

  const { title, date, excerpt, tags } = entry.attributes;

  return (
    <article className={clsx('ves-entry', className)}>
      <EntryHeader
        className="ves-entry__header"
        title={title}
        date={date}
        readingTime={entry.readingTimeWPM}
        excerpt={excerpt}
      />

      <EntryBody className="ves-entry__body" src={src} />

      {tags && tags.length > 0 && (
        <div className="ves-entry__tags">
          <TagBox tags={tags.map(toTag)} />
        </div>
      )}
    </article>
  );
};

export default Entry;
