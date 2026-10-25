import type { InputType } from 'storybook/internal/types';
import { iconNames } from '@core/tokens/icons';

export const iconArgType: InputType = {
  control: 'select',
  options: iconNames,
  table: { type: { summary: 'IconName' } },
};
