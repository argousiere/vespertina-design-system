import type { InputType } from 'storybook/internal/types';
import { AspectRatio } from '@core/models/ImageModel';
import { imageRecord } from '../fixtures/images';

export const imageArgType: InputType = {
  control: 'select',
  options: Object.keys(imageRecord),
  mapping: imageRecord,
  table: { type: { summary: 'ImageModel' } },
};

export const aspectRatioArgType: InputType = {
  control: 'inline-radio',
  options: Object.values(AspectRatio),
  table: { type: { summary: 'AspectRatio' } },
};
