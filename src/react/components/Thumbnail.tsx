import React from 'react';
import type { ComponentProps } from 'react';
import clsx from 'clsx';
import type { ThumbnailModel } from '@core/models/ThumbnailModel';
import Tooltip from './Tooltip';

export interface ThumbnailProps
  extends Omit<ComponentProps<'img'>, keyof ThumbnailModel | 'children'> {
  thumbnail?: ThumbnailModel;
  caption?: string | React.ReactNode;
  captionMaxLines?: number;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail = {},
  caption,
  captionMaxLines,
  className,
  style,
  onError,
  ...props
}) => {
  const { src, alt, width, height, sources } = thumbnail;
  const [hasImgSrc, setHasImgSrc] = React.useState(!!src);

  React.useEffect(() => {
    setHasImgSrc(!!src);
  }, [src]);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setHasImgSrc(false);
    onError?.(event);
  };

  return (
    <figure
      className={clsx(
        'ves-thumbnail',
        {
          'ves-thumbnail--missing': !hasImgSrc,
        },
        className
      )}
      style={style}
    >
      <picture
        className="ves-thumbnail__picture"
        style={{
          width,
          height,
        }}
      >
        {sources?.map((source) => (
          <source
            key={source.media}
            media={source.media}
            srcSet={source.srcSet}
          />
        ))}
        <img
          {...props}
          className="ves-thumbnail__img"
          src={src}
          height={height}
          width={width}
          alt={alt}
          onError={handleImageError}
        />
      </picture>
      {caption &&
        (captionMaxLines ? (
          <Tooltip title={caption} showOnlyWhenTruncated>
            <figcaption
              className="ves-thumbnail__caption ves-thumbnail__caption--clamped clamp-text"
              style={
                { '--clamp-text-lines': captionMaxLines } as React.CSSProperties
              }
            >
              {caption}
            </figcaption>
          </Tooltip>
        ) : (
          <figcaption className="ves-thumbnail__caption">{caption}</figcaption>
        ))}
    </figure>
  );
};

export default Thumbnail;
