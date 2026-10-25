import type { InputType } from 'storybook/internal/types';
import { ButtonLevel, ButtonVariant } from '@core/models/ButtonModel';

export const buttonLevels = Object.values(ButtonLevel);
export const buttonVariants = Object.values(ButtonVariant);

export const buttonLevelArgType: InputType = {
  control: 'select',
  options: buttonLevels,
  table: { type: { summary: 'ButtonLevel' } },
};

export const buttonVariantArgType: InputType = {
  control: 'inline-radio',
  options: buttonVariants,
  table: { type: { summary: 'ButtonVariant' } },
};
