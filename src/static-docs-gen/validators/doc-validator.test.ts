import { describe, expect, it } from 'vitest';
import { DocRecordStatus } from '../types/doc-record.type';
import { validateDoc, type ParsedDoc } from './doc-validator';

const empty: ParsedDoc = {
  required: { title: null, date: null },
  optional: {
    time: null,
    last_update_date: null,
    last_update_time: null,
    tags: null,
    summary: null,
    publish_status: null,
  },
};

const valid: ParsedDoc = {
  ...empty,
  required: { title: 'My doc', date: '2020-01-02' },
};

const withOptional = (optional: Partial<ParsedDoc['optional']>): ParsedDoc => ({
  ...valid,
  optional: { ...empty.optional, ...optional },
});

describe('validateDoc', () => {
  it('should return MALFORMED when the frontmatter could not be read', () => {
    expect(validateDoc(null)).toBe(DocRecordStatus.MALFORMED);
  });

  it('should return EMPTY when every field is missing', () => {
    expect(validateDoc(empty)).toBe(DocRecordStatus.EMPTY);
  });

  it('should return VALID with only title and date', () => {
    expect(validateDoc(valid)).toBe(DocRecordStatus.VALID);
  });

  it('should return VALID for a complete doc', () => {
    expect(
      validateDoc(
        withOptional({
          time: '09:30',
          last_update_date: '2026-10-19',
          last_update_time: '10:00',
          tags: [],
          summary: 'A summary',
          publish_status: 'published',
        })
      )
    ).toBe(DocRecordStatus.VALID);
  });

  it('should return MALFORMED when a required field is missing', () => {
    const docs: ParsedDoc[] = [
      { ...valid, required: { title: null, date: '2020-01-02' } },
      { ...valid, required: { title: 'My doc', date: null } },
    ];
    expect(
      docs.every((doc) => validateDoc(doc) === DocRecordStatus.MALFORMED)
    ).toBe(true);
  });

  it('should return MALFORMED when the date is not a real calendar date', () => {
    const dates = [
      'tomorrow',
      '2026-1-8',
      '2026-13-01',
      '2026-02-31',
      '0000-00-00',
    ];
    expect(
      dates.every(
        (date) =>
          validateDoc({ ...valid, required: { title: 'My doc', date } }) ===
          DocRecordStatus.MALFORMED
      )
    ).toBe(true);
  });

  it('should return MALFORMED when an optional field is badly formed', () => {
    const docs = [
      withOptional({ time: '24:00' }),
      withOptional({ time: '630' }),
      withOptional({ last_update_date: 'yesterday' }),
      withOptional({ last_update_date: '2026-02-31' }),
      withOptional({ last_update_time: '25:00' }),
      withOptional({ publish_status: 'live' }),
    ];
    expect(
      docs.every((doc) => validateDoc(doc) === DocRecordStatus.MALFORMED)
    ).toBe(true);
  });
});
