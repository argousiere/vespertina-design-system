export interface Thumbnail {
  src?: string;
  height?: number | string;
  width?: number | string;
  altText?: string;
  caption?: string;
  sources?: {
    mediaQuery: string;
    srcset: string;
  }[];
}
