import type { BaseRecord, BaseRecordItem } from './record';

export enum PublishStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export const PUBLISH_STATUSES = Object.values(PublishStatus);

export enum DocRecordStatus {
  VALID = 'valid',
  MALFORMED = 'malformed',
  EMPTY = 'empty',
}

export interface DocFrontmatter {
  title: string;
  date: string;
  time?: string;
  last_update_date?: string;
  last_update_time?: string;
  tags?: string[];
  publish_status?: PublishStatus;
  summary?: string;
}

export interface DocRecordItem extends BaseRecordItem {
  record_status: DocRecordStatus;
  path: string;
  title: string;
  date: string;
  time: string;
  last_update_date: string;
  last_update_time: string;
  tags: string[];
  publish_status: PublishStatus;
  summary?: string;
  additional_props?: Record<string, unknown>;
}

export type DocRecord = BaseRecord<DocRecordItem>;
