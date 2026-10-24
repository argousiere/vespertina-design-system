export interface ThumbnailModel {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  sources?: {
    media: string;
    srcSet: string;
  }[];
}
