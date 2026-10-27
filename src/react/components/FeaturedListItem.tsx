import clsx from 'clsx';
import type { EntryListItemProps } from './EntryListItem';
import Heading from './Heading';
import Thumbnail from './Thumbnail';

export type FeaturedListItemProps = Omit<EntryListItemProps, 'disabled'>;

const FeaturedListItem: React.FC<FeaturedListItemProps> = ({
  entry,
  className,
  ...props
}) => {
  const { title, description, url, thumbnail = entry.cover } = entry;

  const content = (
    <div className="ves-featured-list__item-content">
      <Thumbnail
        thumbnail={
          thumbnail && { ...thumbnail, width: undefined, height: undefined }
        }
      />

      <div className="ves-featured-list__item-details">
        <Heading
          level="h3"
          className="ves-featured-list__item-title clamp-text"
          label={title}
        />
        {description && (
          <p className="ves-featured-list__item-description clamp-text">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <li {...props} className={clsx('ves-featured-list__item', className)}>
      <a className="ves-featured-list__item-link" href={url}>
        {content}
      </a>
    </li>
  );
};

export default FeaturedListItem;
