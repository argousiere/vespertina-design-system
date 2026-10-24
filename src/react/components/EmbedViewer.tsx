import { useState } from 'react';
import clsx from 'clsx';
import ProgressiveBlur from './ProgressiveBlur';
import { ProgressiveBlurDirection } from '../constants';

export interface EmbedViewerPreview {
  imgSrc: string;
  imgAlt: string;
  loadActionLabel?: string;
}

export interface EmbedViewerProps {
  preview?: EmbedViewerPreview;
  src: string;
  title: string;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
  className?: string;
}

const EmbedViewer: React.FC<EmbedViewerProps> = ({
  preview,
  src,
  title,
  aspectRatioWidth,
  aspectRatioHeight,
  className,
}) => {
  const [active, setActive] = useState(!preview);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={clsx('ves-embed-viewer', className)}
      style={
        {
          '--ves-embed-viewer-aspect-ratio': `${aspectRatioWidth} / ${aspectRatioHeight}`,
        } as React.CSSProperties
      }
    >
      {preview && (
        <img
          className="ves-embed-viewer__preview-image"
          src={preview.imgSrc}
          alt={preview.imgAlt}
        />
      )}

      {active && (
        <iframe
          className={clsx('ves-embed-viewer__frame', {
            'ves-embed-viewer__frame--loaded': loaded,
          })}
          title={title}
          src={src}
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      )}

      {preview && !active && (
        <div className="ves-embed-viewer__overlay">
          <ProgressiveBlur direction={ProgressiveBlurDirection.BOTTOM_TO_TOP} />
          
          <button
            type="button"
            className="ves-btn ves-btn--contrast"
            onClick={() => setActive(true)}
          >
            {preview.loadActionLabel ?? 'Load preview'}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmbedViewer;
