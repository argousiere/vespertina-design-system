import type { ThumbnailModel } from './Thumbnail';

export interface EntryModel {
  id: string;
  title: string;
  url: string;
  date: Date;
  description?: string;
  thumbnail?: ThumbnailModel;
}
