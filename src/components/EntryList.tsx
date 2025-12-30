import EntryListItem from './EntryListItem';
import type { EntryListItemProps } from './EntryListItem';

interface EntryListProps {
  items: EntryListItemProps[];
}

const EntryList: React.FC<EntryListProps> = ({ items }) => {
  return (
    <ul className="ves-entry-list">
      {items.map((item) => (
        <EntryListItem key={item.id} {...item} />
      ))}

      {items.length === 0 && (
        <li className="ves-entry-list__empty">
          There are no entries to display.
        </li>
      )}
    </ul>
  );
};

export default EntryList;
