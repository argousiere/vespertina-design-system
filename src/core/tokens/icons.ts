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
import work from '../assets/icons/work.svg';
import education from '../assets/icons/education.svg';
import publication from '../assets/icons/publication.svg';
import project from '../assets/icons/project.svg';
import externalLink from '../assets/icons/external-link.svg';
import location from '../assets/icons/location.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import mail from '../assets/icons/mail.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';


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
  work,
  education,
  publication,
  project,
  'external-link': externalLink,
  location,
  github,
  linkedin,
  mail,
  menu,
  close,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as IconName[];
