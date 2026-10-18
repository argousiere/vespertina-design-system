import { describe, expect, it } from 'vitest';
import { DocRecordStatus, PublishStatus } from '../types/doc-record.type';
import { parseDoc, parseDocId } from './parse-doc';
import {
  DEFAULT_DOC_DATE,
  DEFAULT_DOC_TIME,
} from '../validators/formats.const';

describe('parseDocId', () => {
  it('should use the last path segment without the extension', () => {
    const filenameIdPairs = [
      ['some-post.md', 'some-post'],
      ['a/b/some-post.md', 'some-post'],
      ['some-post', 'some-post'],
      ['nested/plain.md', 'plain'],
      ['2026-10-19-some-post.md', '2026-10-19-some-post'],
      ['notes.md.md', 'notes.md'],
    ];
    expect(
      filenameIdPairs.every(([filename, id]) => parseDocId(filename) === id)
    ).toBe(true);
  });
});

describe('parseDoc', () => {
  it('should parse a valid doc', () => {
    const frontmatter = {
      title: 'My doc',
      date: '2020-01-02',
      time: '09:30',
      tags: [],
      last_update_date: '2026-10-19',
      last_update_time: '10:00',
      summary: 'A summary',
      publish_status: 'published',
      cover: 'a.png',
    };

    expect(
      parseDoc({ filename: 'nested/2026-10-18-my-doc.md', frontmatter })
    ).toEqual({
      id: '2026-10-18-my-doc',
      record_status: DocRecordStatus.VALID,
      path: 'nested/2026-10-18-my-doc.md',
      title: 'My doc',
      date: '2020-01-02',
      time: '09:30',
      last_update_date: '2026-10-19',
      last_update_time: '10:00',
      tags: [],
      summary: 'A summary',
      publish_status: PublishStatus.PUBLISHED,
      additional_props: { cover: 'a.png' },
    });
  });

  it('should stay valid and coerce defaults when optional fields are skipped', () => {
    const frontmatter = { title: 'Minimal', date: '2020-01-02' };

    expect(parseDoc({ filename: 'minimal.md', frontmatter })).toMatchObject({
      record_status: DocRecordStatus.VALID,
      time: DEFAULT_DOC_TIME,
      last_update_date: DEFAULT_DOC_DATE,
      last_update_time: DEFAULT_DOC_TIME,
      tags: [],
      summary: undefined,
      publish_status: PublishStatus.DRAFT,
      additional_props: undefined,
    });
  });

  it('should stay valid and coerce defaults when optional fields are empty', () => {
    const frontmatter = {
      title: 'Empty fields',
      date: '2020-01-02',
      tags: null,
      summary: null,
      publish_status: null,
    };

    expect(
      parseDoc({ filename: 'empty-fields.md', frontmatter })
    ).toMatchObject({
      record_status: DocRecordStatus.VALID,
      tags: [],
      summary: undefined,
      publish_status: PublishStatus.DRAFT,
    });
  });

  it('should normalize times and keep nested extras untouched', () => {
    const frontmatter = {
      title: 'Extras',
      date: '2020-01-02',
      time: '9:30',
      seo: { title: 'Search title' },
    };

    expect(parseDoc({ filename: 'extras.md', frontmatter })).toMatchObject({
      record_status: DocRecordStatus.VALID,
      time: '09:30',
      additional_props: { seo: { title: 'Search title' } },
    });
  });

  it('should fall back to defaults when there is no frontmatter', () => {
    expect(parseDoc({ filename: 'plain.md', frontmatter: {} })).toMatchObject({
      record_status: DocRecordStatus.EMPTY,
      title: 'plain.md',
      date: DEFAULT_DOC_DATE,
      time: DEFAULT_DOC_TIME,
      tags: [],
      publish_status: PublishStatus.DRAFT,
    });
  });

  it('should keep invalid strings as they are and mark the doc malformed', () => {
    const frontmatter = {
      title: 'Bad datetime and publish status',
      date: '2021-02-31',
      time: '25:00',
      publish_status: 'live',
    };

    expect(
      parseDoc({ filename: 'bad-datetime-publish-status.md', frontmatter })
    ).toMatchObject({
      record_status: DocRecordStatus.MALFORMED,
      title: 'Bad datetime and publish status',
      date: '2021-02-31',
      time: '25:00',
      publish_status: PublishStatus.DRAFT,
    });
  });

  it('should mark a doc without a required key as malformed and use the default', () => {
    expect(
      parseDoc({ filename: 'no-date.md', frontmatter: { title: 'No date' } })
    ).toMatchObject({
      id: 'no-date',
      record_status: DocRecordStatus.MALFORMED,
      title: 'No date',
      date: DEFAULT_DOC_DATE,
    });
  });

  it('should mark unreadable frontmatter as malformed', () => {
    expect(
      parseDoc({ filename: 'broken.md', frontmatter: null })
    ).toMatchObject({
      id: 'broken',
      record_status: DocRecordStatus.MALFORMED,
      title: 'broken.md',
    });
  });
});
