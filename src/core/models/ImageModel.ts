export interface ImageModel {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  srcSet?: string;
  sizes?: string;
  sources?: {
    media: string;
    srcSet: string;
  }[];
}

export enum AspectRatio {
  SQUARE = '1 / 1',
  WIDESCREEN = '16 / 9',
}
