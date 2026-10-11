import { clsx } from 'clsx';
import { icons, type IconName } from './icons';

export type { IconName };

export interface IconProps {
  name: IconName;
  ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({ name, ariaLabel }) => (
  <span
    className={clsx('ves-icon', `ves-icon--${name}`)}
    style={{ '--ves-icon-src': `url("${icons[name]}")` } as React.CSSProperties}
    {...(ariaLabel
      ? { role: 'img', 'aria-label': ariaLabel }
      : { 'aria-hidden': true })}
  />
);

export default Icon;
