import type { InputType } from 'storybook/internal/types';
import type { NavItemModel } from '@core/models/NavItemModel';
import { navItemRecord, navItemUrlRecord } from '../fixtures/nav-items';

const table = { category: 'nav-item' };

export const navItemArgTypes: Record<keyof NavItemModel, InputType> = {
  label: { control: 'text', table },
  url: { control: 'text', table },
};

export const navItemsArgType: InputType = {
  control: 'multi-select',
  options: Object.keys(navItemRecord),
  mapping: navItemRecord,
  table: { type: { summary: 'NavItemModel[]' } },
};

export const activeUrlArgType: InputType = {
  control: 'select',
  options: Object.keys(navItemRecord),
  mapping: navItemUrlRecord,
  table: { type: { summary: 'string' } },
};
