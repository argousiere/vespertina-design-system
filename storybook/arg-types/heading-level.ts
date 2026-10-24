import type { InputType } from 'storybook/internal/types';
import type { HeadingLevel } from '@components/Heading';

export const headingLevels: HeadingLevel[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const headingLevelArgType: InputType = {
  control: 'select',
  options: headingLevels,
  table: { type: { summary: headingLevels.join(' | ') } },
};
