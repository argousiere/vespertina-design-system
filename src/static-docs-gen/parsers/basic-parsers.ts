import { TIME_FORMAT } from '../validators/formats.const';

const isMissing = (value: unknown): boolean =>
  value === undefined || value === null || value === '';

export const parseString = (value: unknown): string | null => {
  if (isMissing(value)) {
    return null;
  }

  if (typeof value === 'string') {
    return value;
  }

  return typeof value === 'number' || typeof value === 'boolean'
    ? String(value)
    : null;
};

export const parseDate = (value: unknown): string | null => {
  return typeof value === 'string' ? parseString(value) : null;
};

export const parseTime = (value: unknown): string | null => {
  const text = parseString(value);
  const match = text === null ? null : TIME_FORMAT.exec(text);

  return match === null ? text : `${match[1].padStart(2, '0')}:${match[2]}`;
};

export const parseStringArray = (value: unknown): string[] | null => {
  if (Array.isArray(value)) {
    if (value.some((item) => Array.isArray(item))) {
      return null;
    }

    return value
      .filter((item) => item !== null && item !== undefined)
      .map((item) =>
        typeof item === 'object' ? JSON.stringify(item) : String(item)
      );
  }

  const text =
    value === 0 || typeof value === 'boolean' ? null : parseString(value);

  return text === null ? null : [text];
};
