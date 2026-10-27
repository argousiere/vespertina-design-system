import { format, isValid, parse } from 'date-fns';

export const ISO_DAY_FORMAT = 'yyyy-MM-dd';
export const DEFAULT_DATE_FORMAT = 'yyyy.MMM.dd';
export const INVALID_DATE_LABEL = 'Invalid date';

export const parseDate = (dateStr: string = ""): Date | null => {
  const parsed = parse(dateStr.slice(0, 10), ISO_DAY_FORMAT, new Date());

  return isValid(parsed) ? parsed : null;
};

export const formatDate = (
  dateStr: string,
  dateFormat?: string
): string | null => {
  if (!dateStr) {
    return null;
  }

  const parsed = parseDate(dateStr);

  if (typeof dateFormat !== 'string' || !dateFormat) {
    dateFormat = DEFAULT_DATE_FORMAT;
  }

  return parsed && format(parsed, dateFormat);
};
