import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import search from '../assets/icons/search.svg';
import check from '../assets/icons/check.svg';
import info from '../assets/icons/info.svg';
import warning from '../assets/icons/warning.svg';
import error from '../assets/icons/error.svg';
import star from '../assets/icons/star.svg';
import grid from '../assets/icons/grid.svg';
import list from '../assets/icons/list.svg';


export const icons = {
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  search,
  check,
  info,
  warning,
  error,
  star,
  grid,
  list,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as IconName[];
