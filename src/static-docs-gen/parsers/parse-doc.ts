import {
  PUBLISH_STATUSES,
  PublishStatus,
  type DocRecordItem,
} from '../types/doc-record.type';
import {
  parseDate,
  parseString,
  parseStringArray,
  parseTime,
} from './basic-parsers';
import { validateDoc } from '../validators/doc-validator';
import {
  DEFAULT_DOC_DATE,
  DEFAULT_DOC_TIME,
} from '../validators/formats.const';

const KNOWN_FRONTMATTER_KEYS: string[] = [
  'title',
  'date',
  'time',
  'last_update_date',
  'last_update_time',
  'tags',
  'publish_status',
  'summary',
];

export const parseDocId = (filename: string): string =>
  filename.slice(filename.lastIndexOf('/') + 1).replace(/\.md$/, '');

export interface DocSource {
  filename: string;
  frontmatter: Record<string, unknown> | null;
}

export function parseDoc(docSource: DocSource): DocRecordItem {
  const { filename, frontmatter } = docSource;
  const metadata = frontmatter ?? {};

  const required = {
    title: parseString(metadata.title),
    date: parseDate(metadata.date),
  };
  const optional = {
    time: parseTime(metadata.time),
    last_update_date: parseDate(metadata.last_update_date),
    last_update_time: parseTime(metadata.last_update_time),
    tags: parseStringArray(metadata.tags),
    summary: parseString(metadata.summary),
    publish_status: parseString(metadata.publish_status),
  };

  const extras: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(metadata)) {
    if (!KNOWN_FRONTMATTER_KEYS.includes(key)) {
      extras[key] = value;
    }
  }

  const recordStatus = validateDoc(
    frontmatter === null ? null : { required, optional }
  );

  return {
    id: parseDocId(filename),
    record_status: recordStatus,
    path: filename,
    title: required.title ?? filename,
    date: required.date ?? DEFAULT_DOC_DATE,
    time: optional.time ?? DEFAULT_DOC_TIME,
    last_update_date: optional.last_update_date ?? DEFAULT_DOC_DATE,
    last_update_time: optional.last_update_time ?? DEFAULT_DOC_TIME,
    tags: optional.tags ?? [],
    summary: optional.summary ?? undefined,
    publish_status:
      PUBLISH_STATUSES.find((status) => status === optional.publish_status) ??
      PublishStatus.DRAFT,
    additional_props: Object.keys(extras).length > 0 ? extras : undefined,
  };
}
