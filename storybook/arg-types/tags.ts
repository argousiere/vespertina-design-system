import type { InputType } from 'storybook/internal/types';
import { tagRecord } from '../fixtures/tags';

export const tagsArgType: InputType = {
  control: 'multi-select',
  options: Object.keys(tagRecord),
  mapping: tagRecord,
  table: { type: { summary: 'TagModel[]' } },
};

export const tagArgType: InputType = {
  control: 'select',
  options: Object.keys(tagRecord),
  mapping: tagRecord,
  table: { type: { summary: 'TagModel' } },
};
