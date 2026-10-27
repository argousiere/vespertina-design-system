import React from 'react';
import type { ComponentProps } from 'react';
import clsx from 'clsx';
import type { AspectRatio } from '@core/models/ImageModel';
import type { ThumbnailModel } from '@core/models/ThumbnailModel';
import Tooltip from './Tooltip';

export interface ThumbnailProps
  extends Omit<ComponentProps<'img'>, keyof ThumbnailModel | 'children'> {
  thumbnail?: ThumbnailModel;
  caption?: string | React.ReactNode;
  captionMaxLines?: number;
  aspectRatio?: AspectRatio;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  caption,
  captionMaxLines,
  aspectRatio,
  className,
  style,
  onError,
  ...props
}) => {
  const { src, alt, width, height, srcSet, sizes, sources } = thumbnail ?? {};
  const [hasImgSrc, setHasImgSrc] = React.useState(!!src);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    let isCurrent = true;

    setHasImgSrc(!!src);
    imgRef.current?.decode().catch(() => isCurrent && setHasImgSrc(false));

    return () => {
      isCurrent = false;
    };
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
          'ves-thumbnail--fixed-ratio': aspectRatio,
        },
        className
      )}
      style={
        {
          ...style,
          '--ves-thumbnail-aspect-ratio': aspectRatio,
        } as React.CSSProperties
      }
    >
      <picture
        className="ves-thumbnail__picture"
        style={{
          width,
          height: aspectRatio ? undefined : height,
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
          ref={imgRef}
          className="ves-thumbnail__img"
          src={src}
          srcSet={srcSet}
          sizes={sizes}
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
                { '--clamp-text-lines': captionMaxLines ?? 1 } as React.CSSProperties
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
