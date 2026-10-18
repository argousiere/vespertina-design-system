import { DocRecordStatus, PUBLISH_STATUSES } from '../types/doc-record.type';
import { isValidDate, isValidTime } from './datetime-validator';

export interface ParsedDoc {
  required: {
    title: string | null;
    date: string | null;
  };
  optional: {
    time: string | null;
    last_update_date: string | null;
    last_update_time: string | null;
    tags: string[] | null;
    summary: string | null;
    publish_status: string | null;
  };
}

export const validateDoc = (parsedDoc: ParsedDoc | null): DocRecordStatus => {
  if (parsedDoc === null) {
    return DocRecordStatus.MALFORMED;
  }

  const { required, optional } = parsedDoc;

  const values = [...Object.values(required), ...Object.values(optional)];

  if (values.every((value) => value === null)) {
    return DocRecordStatus.EMPTY;
  }

  // Check required metadata fields
  if (
    required.title === null ||
    required.date === null ||
    !isValidDate(required.date)
  ) {
    return DocRecordStatus.MALFORMED;
  }

  // Check optional metadata fields
  const { time, last_update_date, last_update_time, publish_status } = optional;

  const optionalChecks = [
    time === null || isValidTime(time),
    last_update_date === null || isValidDate(last_update_date),
    last_update_time === null || isValidTime(last_update_time),
    publish_status === null ||
      PUBLISH_STATUSES.some((status) => status === publish_status),
  ];

  return optionalChecks.every(Boolean)
    ? DocRecordStatus.VALID
    : DocRecordStatus.MALFORMED;
};
