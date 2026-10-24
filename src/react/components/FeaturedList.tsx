import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { FeaturedListItemProps } from './FeaturedListItem';
import FeaturedListItem from './FeaturedListItem';
import Heading from './Heading';

export interface FeaturedListProps
  extends Omit<ComponentProps<'ul'>, 'children'> {
  items: FeaturedListItemProps[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <section className={clsx('ves-featured-list', className)}>
      <Heading
        level="h2"
        className="ves-featured-list__title"
        label="Featured"
      />
      <ul {...props} className="ves-featured-list__items">
        {items.map((item) => (
          <FeaturedListItem key={item.entry.id} {...item} />
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
