import React from 'react';

interface ThumbnailProps {
  src: string;
  height?: number | string;
  width?: number | string;
  altText: string;
  caption?: string;
  sources?: {
    mediaQuery: string;
    srcset: string;
  }[];
  ariaLabel?: string;
  ariaDescribedBy?: string;
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
  onClick,
}) => {
  return (
    <figure className={`ves-thumbnail`}>
      <picture>
        {sources?.map((source) => (
          <source
            key={source.mediaQuery}
            media={source.mediaQuery}
            srcSet={source.srcset}
          />
        ))}
        <img
          src={src}
          height={height ?? 100}
          width={width ?? 100}
          alt={altText}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          onClick={onClick}
        />
      </picture>
      {caption && (
        <figcaption className="ves-thumbnail__caption">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Thumbnail;
