import { DATE_FORMAT, TIME_FORMAT } from './formats.const';

export const isValidDate = (text: string): boolean => {
  const match = DATE_FORMAT.exec(text);
  if (match === null) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
};

export const isValidTime = (text: string): boolean => TIME_FORMAT.test(text);
