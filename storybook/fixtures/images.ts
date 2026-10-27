import type { ImageModel } from '@core/models/ImageModel';
import spaceGirl from '../images/space-girl.png';

const getCloudinaryImage = ({
  remoteUrl,
  imgName,
  widths,
}: {
  remoteUrl: string;
  imgName: string;
  widths: number[];
}): Pick<ImageModel, 'src' | 'srcSet' | 'sizes'> => {
  const defaultWidth = widths[0];

  const getUrl = (width: number) =>
    `${remoteUrl}/f_auto,q_auto,w_${width}/${imgName}`;


  return {
    src: getUrl(defaultWidth),
    srcSet: widths.map((width) => `${getUrl(width)} ${width}w`).join(', '),
    sizes: `(max-width: ${widths[0]}px) 100vw, ${defaultWidth}px`,
  };
};

export const imageRecord = {
  local: {
    src: spaceGirl,
    alt: 'Space Girl',
    width: 512,
    height: 512,
  },
  remote: {
    ...getCloudinaryImage({
      remoteUrl: 'https://res.cloudinary.com/dkvpvfqxt/image/upload/ar_1:1,c_fill',
      imgName: 'vespertina-design-system/celestial-wanderer.jpg',
      widths: [512, 1024],
    }),
    alt: 'Celestial Wanderer',
    width: 512,
    height: 512,
  },
  remoteCover: {
    ...getCloudinaryImage({
      remoteUrl: 'https://res.cloudinary.com/dkvpvfqxt/image/upload/ar_16:9,c_fill',
      imgName: 'vespertina-design-system/celestial-wanderer.jpg',
      widths: [720, 1440],
    }),
    alt: 'Celestial Wanderer',
    width: 720,
    height: 405,
  },
} satisfies Record<string, ImageModel>;
