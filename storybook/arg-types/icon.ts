import type { InputType } from 'storybook/internal/types';
import { iconNames } from '@components/icons';

export const iconArgType: InputType = {
  control: 'select',
  options: iconNames,
  table: { type: { summary: 'IconName' } },
};
