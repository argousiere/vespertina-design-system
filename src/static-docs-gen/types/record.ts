export interface BaseRecordItem {
  id: string;
}

export type BaseRecord<T extends BaseRecordItem = BaseRecordItem> = Record<
  T['id'],
  T
>;
