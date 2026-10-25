import clsx from 'clsx';
import type { EntryListItemProps } from './EntryListItem';
import Thumbnail, { type ThumbnailProps } from './Thumbnail';

export type GalleryItemProps = Omit<EntryListItemProps, 'disabled'>
& Pick<ThumbnailProps, 'captionMaxLines' | 'aspectRatio'>;

const GalleryItem: React.FC<GalleryItemProps> = ({
  entry,
  captionMaxLines,
  aspectRatio,
  className,
  ...props
}) => {
  const { title, url, thumbnail } = entry;

  return (
  <li {...props} className={clsx('ves-gallery__item', className)}>
      <a className="ves-gallery__item-link" href={url}>
        <Thumbnail
          thumbnail={
            thumbnail && { ...thumbnail, width: undefined, height: undefined }
          }
          caption={title}
          captionMaxLines={captionMaxLines}
          aspectRatio={aspectRatio}
        />
      </a>
    </li>
  );
};

export default GalleryItem;
