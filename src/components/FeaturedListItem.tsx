import type { EntryModel } from '@models/Entry';
import Thumbnail from './Thumbnail';

export type FeaturedListItemProps = EntryModel;

const FeaturedListItem: React.FC<FeaturedListItemProps> = ({
  title,
  description,
  url,
  thumbnail,
}) => {
  const content = (
    <div className="ves-featured-list__item-content">
      <Thumbnail {...thumbnail} />

      <div className="ves-featured-list__item-details">
        <h3 className="ves-featured-list__item-title text-ellipsis">{title}</h3>
        {description && (
          <p className="ves-featured-list__item-description">{description}</p>
        )}
      </div>
    </div>
  );

  return (
    <li className="ves-featured-list__item">
      <a className="ves-featured-list__item-link" href={url}>
        {content}
      </a>
    </li>
  );
};

export default FeaturedListItem;
