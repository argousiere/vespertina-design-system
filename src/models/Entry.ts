import type { Thumbnail } from './Thumbnail';

export interface Entry {
  id: string;
  title: string;
  url: string;
  date: Date;
  description?: string;
  thumbnail?: Thumbnail;
}
