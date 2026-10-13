import { useState } from 'react';

const FigmaPreview = ({
  poster,
  posterAlt,
  src,
  title,
  aspectRatio,
}: {
  poster: string;
  posterAlt: string;
  src: string;
  title: string;
  aspectRatio: string;
}) => {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', aspectRatio }}>
      <img
        src={poster}
        alt={posterAlt}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      {active && (
        <iframe
          title={title}
          src={src}
          allowFullScreen
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}

      {!active && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'absolute',
          width: '100%',
          height: '30%',
          bottom: 0,
          background: `linear-gradient(to bottom, 
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) 25%, 
            rgba(0,0,0,0) 26%, 
            rgba(0,0,0,0.75) 100%)`,
          backdropFilter: 'blur(1.25px)'
        }}>
          <button
            type="button"
            onClick={() => setActive(true)}
            className="ves-btn ves-btn--contrast"
          >
            Load Figma preview
          </button>
        </div>
      )}
    </div>
  );
};

export default FigmaPreview;
