import type { InputType } from 'storybook/internal/types';
import type { EntryModel } from '@core/models/EntryModel';
import { EntriesViewMode } from '@react/constants';
import { tagsArgType } from './tags';
import { imageArgType } from './image';
import { thumbnailArgType } from './thumbnail';

const table = { category: 'entry' };

export const entryArgTypes: Record<keyof EntryModel, InputType> = {
  id: { control: false, table },
  title: { control: 'text', table },
  url: { control: false, table },
  date: { control: 'text', description: 'yyyy-MM-dd', table },
  description: { control: 'text', table },
  readingTimeMinutes: { control: 'number', table },
  thumbnail: { ...thumbnailArgType, table: { ...thumbnailArgType.table, ...table } },
  cover: { ...imageArgType, table: { ...imageArgType.table, ...table } },
  tags: { ...tagsArgType, table: { ...tagsArgType.table, ...table } },
};

export const entriesViewModeArgType: InputType = {
  control: 'inline-radio',
  options: Object.values(EntriesViewMode),
  table: { type: { summary: 'EntriesViewMode' } },
};
