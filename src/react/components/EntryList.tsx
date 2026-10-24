import type { JSX } from 'react';
import EntryListItem from './EntryListItem';
import type { EntryListItemProps } from './EntryListItem';
import Heading, { type HeadingLevel } from './Heading';

interface EntryListProps {
  entryListTitle: string;
  headingLevel?: HeadingLevel;
  items: EntryListItemProps[];
}

const EntryList: React.FC<EntryListProps> = ({
  entryListTitle,
  headingLevel,
  items,
}) => {

  return (
    <section className="ves-entry-list">

      <Heading level={headingLevel}>{entryListTitle}</Heading>
      <ul className="ves-entry-list__items">
        {items.map((item) => (
          <EntryListItem key={item.id} {...item} />
        ))}

        {items.length === 0 && (
          <li className="ves-entry-list__empty">
            There are no entries to display.
          </li>
        )}
      </ul>
    </section>
  );
};

export default EntryList;
