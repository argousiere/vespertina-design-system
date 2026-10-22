import { describe, expect, it } from 'vitest';
import { formatDate, parseDate } from './date';

describe('parseDate', () => {
  it('should parse an ISO day as a local date', () => {
    expect(parseDate('2024-03-05')).toEqual(new Date(2024, 2, 5));
  });

  it('should ignore the time part of an ISO datetime', () => {
    expect(parseDate('2024-03-05T23:30:00Z')).toEqual(new Date(2024, 2, 5));
  });

  it('should return null when no date is given', () => {
    expect(parseDate()).toBeNull();
  });

  it('returns null for invalid dates', () => {
    expect(
      ['', 'not a date', '2024-02-30', '05-03-2024'].every(
        (date) => parseDate(date) === null
      )
    ).toBe(true);
  });
});

describe('formatDate', () => {
  it('should use the default format', () => {
    expect(formatDate('2024-03-05')).toBe('2024.Mar.05');
  });

  it('should fallback to the default format for an empty format', () => {
    expect(formatDate('2024-03-05', '')).toBe('2024.Mar.05');
  });

  it('should support a custom format', () => {
    expect(formatDate('2024-03-05', 'dd/MM/yyyy')).toBe('05/03/2024');
  });

  it('should return null for an invalid date', () => {
    expect(formatDate('invalid')).toBeNull();
  });

  it('should return null for an empty date', () => {
    expect(formatDate('')).toBeNull();
  });
});
