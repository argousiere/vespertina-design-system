import clsx from 'clsx';
import { AspectRatio } from '@core/models/ImageModel';
import type { ImageProps } from './Image';
import Image from './Image';

export type CardCoverProps = ImageProps;

const CardCover: React.FC<CardCoverProps> = ({
  aspectRatio,
  className,
  ...props
}) => {
  return (
    <Image
      {...props}
      aspectRatio={aspectRatio ?? AspectRatio.WIDESCREEN}
      className={clsx('ves-card__cover', className)}
    />
  );
};

export default CardCover;
