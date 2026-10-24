import clsx from 'clsx';
import type { ComponentProps } from 'react';
import EntryListItem from './EntryListItem';
import type { EntryListItemProps } from './EntryListItem';
import Frame from './Frame';
import type { HeadingLevel } from './Heading';

export interface EntryListProps
  extends Omit<ComponentProps<'ol'>, 'children'> {
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
      <ol {...props}>
        {items.map((item) => (
          <EntryListItem key={item.entry.id} {...item} />
        ))}

        {items.length === 0 && (
          <li className="ves-entry-list__empty">
            There are no entries to display.
          </li>
        )}
      </ol>
    </Frame>
  );
};

export default EntryList;
