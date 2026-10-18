import arrowLeft from '@core/assets/icons/arrow-left.svg';
import arrowRight from '@core/assets/icons/arrow-right.svg';
import search from '@core/assets/icons/search.svg';

export const icons = {
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  search,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as IconName[];
