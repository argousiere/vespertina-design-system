import type { FeaturedListItemProps } from './FeaturedListItem';
import FeaturedListItem from './FeaturedListItem';

interface FeaturedListProps {
  items: FeaturedListItemProps[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ items }) => {
  return (
    <section className="ves-featured-list">
      <h2 className="ves-featured-list__title">Featured</h2>
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
