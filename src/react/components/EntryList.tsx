import EntryListItem from './EntryListItem';
import type { EntryListItemProps } from './EntryListItem';
import Frame from './Frame';
import type { HeadingLevel } from './Heading';

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
    
    <Frame
      heading={entryListTitle}
      headingLevel={headingLevel}
      className="ves-entry-list"
    >
      <ul>
        {items.map((item) => (
          <EntryListItem key={item.id} {...item} />
        ))}

        {items.length === 0 && (
          <li className="ves-entry-list__empty">
            There are no entries to display.
          </li>
        )}
      </ul>
    </Frame>
  );
};

export default EntryList;
