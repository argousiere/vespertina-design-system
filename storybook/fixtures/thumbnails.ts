import type { ThumbnailModel } from '@core/models/ThumbnailModel';
import dizzy from '../images/dizzy.jpg';
import kiwi from '../images/kiwi.png';
import spaceGirl from '../images/space-girl.png';
import furnace from '../images/esch-sur-alzette-furnace.jpg';

export const thumbnailRecord = {
  logo: {
    src: './images/vespertina-logo.svg',
    alt: 'Vespertina Logo',
    width: 100,
    height: 100,
  },
  dizzy: {
    src: dizzy,
    alt: 'Dizzy',
    width: 200,
    height: 200,
  },
  kiwi: {
    src: kiwi,
    alt: 'Kiwi',
    width: 200,
    height: 200,
  },
  spaceGirl: {
    src: spaceGirl,
    alt: 'Space Girl',
    width: 200,
    height: 200,
  },
  furnace: {
    src: furnace,
    alt: 'Space Girl',
    width: 200,
    height: 200,
  },
} satisfies Record<string, ThumbnailModel>;

export const emptyThumbnailRecord = {
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
}

export const thumbnails = Object.values(thumbnailRecord);
