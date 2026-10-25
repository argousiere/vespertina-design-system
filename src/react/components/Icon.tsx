import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { icons, type IconName } from '@core/tokens/icons';

export type { IconName };

export interface IconProps extends Omit<ComponentProps<'span'>, 'children'> {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  style,
  'aria-label': ariaLabel,
  ...props
}) => (
  <span
    role={ariaLabel ? 'img' : undefined}
    aria-hidden={ariaLabel ? undefined : true}
    {...props}
    aria-label={ariaLabel}
    className={clsx('ves-icon', `ves-icon--${name}`, className)}
    style={
      {
        ...style,
        '--ves-icon-src': `url("${icons[name]}")`,
      } as React.CSSProperties
    }
  />
);

export default Icon;
