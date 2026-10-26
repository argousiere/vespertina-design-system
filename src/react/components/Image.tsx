import type { ComponentProps } from 'react';
import clsx from 'clsx';
import type { AspectRatio, ImageModel } from '@core/models/ImageModel';

export interface ImageProps
  extends Omit<ComponentProps<'picture'>, 'children'> {
  image: ImageModel;
  aspectRatio?: AspectRatio;
}

const Image: React.FC<ImageProps> = ({
  image,
  aspectRatio,
  className,
  style,
  ...props
}) => {
  const { sources, ...img } = image;

  return (
    <picture
      {...props}
      className={clsx(
        'ves-image',
        { 'ves-image--fixed-ratio': aspectRatio },
        className
      )}
      style={
        { ...style, '--ves-image-aspect-ratio': aspectRatio } as React.CSSProperties
      }
    >
      {sources?.map((source) => (
        <source key={source.media} media={source.media} srcSet={source.srcSet} />
      ))}
      <img {...img} className="ves-image__img" />
    </picture>
  );
};

export default Image;
