import arrowLeft from '@core/assets/icons/arrow-left.svg';
import arrowRight from '@core/assets/icons/arrow-right.svg';
import search from '@core/assets/icons/search.svg';
import check from '@core/assets/icons/check.svg';
import info from '@core/assets/icons/info.svg';
import warning from '@core/assets/icons/warning.svg';
import error from '@core/assets/icons/error.svg';
import star from '@core/assets/icons/star.svg';


export const icons = {
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  search,
  check,
  info,
  warning,
  error,
  star,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as IconName[];
