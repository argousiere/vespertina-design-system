import type { InputType } from 'storybook/internal/types';
import { thumbnailRecord } from '../fixtures/thumbnails';

export const thumbnailArgType: InputType = {
  control: 'select',
  options: Object.keys(thumbnailRecord),
  mapping: thumbnailRecord,
  table: { type: { summary: 'ThumbnailModel' } },
};
