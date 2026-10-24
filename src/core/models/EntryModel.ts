import type { TagModel } from './TagModel';
import type { ThumbnailModel } from './ThumbnailModel';

export interface EntryModel {
  id: string;
  title: string;
  url: string;
  date: string;
  description?: string;
  readingTimeMinutes?: number;
  thumbnail?: ThumbnailModel;
  tags?: TagModel[];
}
