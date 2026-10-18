import type { TagModel } from "./TagModel";
import type { ThumbnailModel } from "./ThumbnailModel";

export interface EntryMetadataModel {
  filename: string;
  title?: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
  thumbnailSrc?: string;
  [key: string]: unknown;
}

export interface EntryModel {
  slug: string;
  metadata: EntryMetadataModel;
  html: string;
  readingTimeWPM: number;
  tags?: TagModel[];
  thumbnail?: ThumbnailModel;
}
