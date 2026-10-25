import type { InputType } from 'storybook/internal/types';
import { AspectRatio } from '@core/models/ThumbnailModel';
import { thumbnailRecord } from '../fixtures/thumbnails';

export const thumbnailArgType: InputType = {
  control: 'select',
  options: Object.keys(thumbnailRecord),
  mapping: thumbnailRecord,
  table: { type: { summary: 'ThumbnailModel' } },
};

export const aspectRatioArgType: InputType = {
  control: 'inline-radio',
  options: Object.values(AspectRatio),
  table: { type: { summary: 'AspectRatio' } },
};
