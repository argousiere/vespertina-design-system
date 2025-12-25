import React from 'react';

interface ThumbnailProps {
  src: string;
  height?: number | string;
  width?: number | string;
  altText: string;
  sources?: {
    mediaQuery: string;
    srcset: string;
  }[];
  ariaLabel?: string;
  ariaDescribedBy?: string;
  onClick?: () => void;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  height,
  width,
  altText,
  sources,
  ariaLabel,
  ariaDescribedBy,
  onClick,
}) => {
  return (
    <picture className={`ves-thumbnail`}>
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
  );
};

export default Thumbnail;
