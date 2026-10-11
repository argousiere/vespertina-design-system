import arrowLeft from '../../core/assets/icons/arrow-left.svg';
import arrowRight from '../../core/assets/icons/arrow-right.svg';

export const icons = {
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as IconName[];
