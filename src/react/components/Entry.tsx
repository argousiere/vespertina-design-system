import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { EntryModel } from '@core/models/EntryModel';
import EntryHeader from './EntryHeader';
import TagBox from './TagBox';

export interface EntryProps extends Omit<ComponentProps<'article'>, 'children'> {
  entry: EntryModel;
  html?: string;
}

const Entry: React.FC<EntryProps> = ({ entry, html, className, ...props }) => {
  const { tags } = entry;

  return (
    <article {...props} className={clsx('ves-entry', className)}>
      <EntryHeader entry={entry} />

      {html && (
        <div
          className="ves-entry__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}


      {tags && tags.length > 0 && (
        <div className="ves-entry__tags">
          <TagBox tags={tags} />
        </div>
      )}
    </article>
  );
};

export default Entry;
