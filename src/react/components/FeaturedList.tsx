import type { FeaturedListItemProps } from './FeaturedListItem';
import FeaturedListItem from './FeaturedListItem';
import Heading from './Heading';

interface FeaturedListProps {
  items: FeaturedListItemProps[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ items }) => {
  return (
    <section className="ves-featured-list">
      <Heading level="h2" className="ves-featured-list__title">
        Featured
      </Heading>
      <ul className="ves-featured-list__items">
        {items.map((item) => (
          <FeaturedListItem key={item.id} {...item} />
        ))}

        {items.length === 0 && (
          <li className="ves-featured-list__empty">
            There are no entries to display.
          </li>
        )}
      </ul>
    </section>
  );
};

export default FeaturedList;
