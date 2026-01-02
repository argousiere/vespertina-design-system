import type { JSX } from 'react';
import EntryListItem from './EntryListItem';
import type { EntryListItemProps } from './EntryListItem';

interface EntryListProps {
  title: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  items: EntryListItemProps[];
}

const HeadingTagMap: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const defaultHeadingTag = 'h2';

const EntryList: React.FC<EntryListProps> = ({
  title,
  headingLevel,
  items,
}) => {
  const HeadingTag = HeadingTagMap[
    headingLevel ?? defaultHeadingTag
  ] as keyof JSX.IntrinsicElements;

  return (
    <section>
      <HeadingTag className="ves-entry-list__title">{title}</HeadingTag>
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
