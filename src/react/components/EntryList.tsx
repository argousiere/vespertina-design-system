import clsx from 'clsx';
import type { ComponentProps } from 'react';
import EmptyState from './EmptyState';
import EntryListItem from './EntryListItem';
import type { EntryListItemProps } from './EntryListItem';
import Frame from './Frame';
import type { HeadingLevel } from './Heading';

export interface EntryListProps extends Omit<ComponentProps<'ol'>, 'children'> {
  entryListTitle: string;
  headingLevel?: HeadingLevel;
  items: EntryListItemProps[];
}

const EntryList: React.FC<EntryListProps> = ({
  entryListTitle,
  headingLevel,
  items,
  className,
  ...props
}) => {
  return (
    <Frame
      heading={entryListTitle}
      headingLevel={headingLevel}
      className={clsx('ves-entry-list', className)}
    >
      {items.length > 0 && (
        <ol {...props}>
          {items.map((item) => {
            return <EntryListItem key={item.entry.id} {...item} />;
          })}
        </ol>
      )}

      {items.length === 0 && <EmptyState />}
    </Frame>
  );
};

export default EntryList;
