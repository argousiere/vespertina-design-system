export interface EntryAttributes {
  title?: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
  [key: string]: unknown;
}

export interface EntryDoc {
  slug: string;
  attributes: EntryAttributes;
  html: string;
  readingTimeWPM: number;
}
