import React from 'react';
import clsx from 'clsx';
import type { ThumbnailModel as ThumbnailModel } from '../models/Thumbnail';
import Tooltip from './Tooltip';

export interface ThumbnailProps extends ThumbnailModel {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  captionMaxLines?: number;
  onClick?: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  height,
  width,
  caption,
  altText,
  sources,
  ariaLabel,
  ariaDescribedBy,
  captionMaxLines,
  onClick,
}) => {
  const [hasImgSrc, setHasImgSrc] = React.useState(!!src);

  React.useEffect(() => {
    setHasImgSrc(!!src);
  }, [src]);

  const handleImageError = () => {
    setHasImgSrc(false);
  };

  return (
    <figure
      className={clsx('ves-thumbnail', {
        'ves-thumbnail--missing': !hasImgSrc,
      })}
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
            key={source.mediaQuery}
            media={source.mediaQuery}
            srcSet={source.srcset}
          />
        ))}
        <img
          className="ves-thumbnail__img"
          src={src}
          height={height}
          width={width}
          alt={altText}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          onClick={onClick}
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
