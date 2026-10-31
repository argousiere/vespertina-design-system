import clsx from 'clsx';
import type { ComponentProps } from 'react';
import EmptyState from './EmptyState';
import GalleryItem from './GalleryItem';
import type { GalleryItemProps } from './GalleryItem';

const DEFAULT_MAX_CAPTION_LINES = 2;

export type GalleryProps = Omit<ComponentProps<'ul'>, 'children'> &
  Pick<GalleryItemProps, 'captionMaxLines' | 'aspectRatio'> & {
    items: GalleryItemProps[];
  };

const Gallery: React.FC<GalleryProps> = ({
  items,
  aspectRatio,
  captionMaxLines,
  className,
  style,
  ...props
}) => {
  return (
    <ul {...props} className={clsx('ves-gallery', className)} style={style}>
      {items.map((item) => {
        return (
          <GalleryItem
            key={item.entry.id}
            {...item}
            captionMaxLines={captionMaxLines ?? DEFAULT_MAX_CAPTION_LINES}
            aspectRatio={aspectRatio}
          />
        );
      })}

      {items.length === 0 && (
        <li className="ves-gallery__empty">
          <EmptyState />
        </li>
      )}
    </ul>
  );
};

export default Gallery;
