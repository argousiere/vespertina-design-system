import { describe, expect, it } from 'vitest';
import {
  parseDate,
  parseString,
  parseStringArray,
  parseTime,
} from './basic-parsers';

const MISSING_VALUES = ['', null, undefined];

describe('parseString', () => {
  it('should return strings as they are, valid or not', () => {
    expect(parseString('hello')).toBe('hello');
  });

  it('should convert numbers and booleans to strings', () => {
    expect(parseString(630)).toBe('630');
    expect(parseString(true)).toBe('true');
  });

  it('should return null for missing values and unsupported types', () => {
    expect(
      [...MISSING_VALUES, {}, []].every((value) => parseString(value) === null)
    ).toBe(true);
  });
});

describe('parseDate', () => {
  it('should keep strings even when they are not real dates', () => {
    const values = ['2020-01-02', '2026-02-31', 'tomorrow', '2026-1-8', '_'];
    expect(values.every((value) => parseDate(value) === value)).toBe(true);
  });

  it('should return null for missing values or invalid values', () => {
    expect(
      [...MISSING_VALUES, true, false, 0, [], {}].every(
        (value) => parseDate(value) === null
      )
    ).toBe(true);
  });
});

describe('parseTime', () => {
  it('should normalize 24h times to HH:mm', () => {
    const pairs = [
      ['09:30', '09:30'],
      ['9:30', '09:30'],
      ['18:30', '18:30'],
      ['0:00', '00:00'],
      ['23:59', '23:59'],
    ];
    expect(
      pairs.every(([value, expected]) => parseTime(value) === expected)
    ).toBe(true);
  });

  it('should keep anything else as a string', () => {
    const pairs: [unknown, string][] = [
      ['24:00', '24:00'],
      ['12:60', '12:60'],
      ['--:--', '--:--'],
      [630, '630'],
    ];
    expect(
      pairs.every(([value, expected]) => parseTime(value) === expected)
    ).toBe(true);
  });

  it('should return null for missing values', () => {
    expect(MISSING_VALUES.every((value) => parseTime(value) === null)).toBe(
      true
    );
  });
});

describe('parseStringArray', () => {
  it('should return arrays of strings', () => {
    expect(parseStringArray(['a', 'b'])).toEqual(['a', 'b']);
  });

  it('should return an empty array for an empty array', () => {
    expect(parseStringArray([])).toEqual([]);
  });

  it('should convert items to strings and skip null items', () => {
    expect(parseStringArray(['a', 1, true, null, undefined])).toEqual([
      'a',
      '1',
      'true',
    ]);
  });

  it('should stringify object items', () => {
    expect(parseStringArray(['a', { x: 1 }])).toEqual(['a', '{"x":1}']);
  });

  it('should return an empty array for a sparse array', () => {
    expect(parseStringArray(new Array(2))).toEqual([]);
  });

  it('should wrap a single value in an array', () => {
    expect(parseStringArray('a')).toEqual(['a']);
    expect(parseStringArray(1)).toEqual(['1']);
  });

  it('should return null for missing, 0, booleans and unsupported values', () => {
    expect(
      [...MISSING_VALUES, 0, true, false, {}].every(
        (value) => parseStringArray(value) === null
      )
    ).toBe(true);
  });

  it('should return null for nested arrays', () => {
    expect([[[[]]]].every((value) => parseStringArray(value) === null)).toBe(
      true
    );
  });
});
