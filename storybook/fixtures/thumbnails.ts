import type { ThumbnailModel } from '@core/models/ThumbnailModel';

export const thumbnailRecord = {
  logo: {
    src: './images/vespertina-logo.svg',
    alt: 'Vespertina Logo',
    width: 100,
    height: 100,
  },
  dizzy: {
    src: './images/dizzy.jpg',
    alt: 'Dizzy',
    width: 200,
    height: 200,
  },
  placeholder: {
    alt: 'No image',
    width: 200,
    height: 200,
  },
  missing: {
    src: './images/this-file-is-non-existent.svg',
    alt: 'Missing image file',
    width: 200,
    height: 200,
  },
} satisfies Record<string, ThumbnailModel>;
