import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { IconName } from '@core/tokens/icons';
import Icon from './Icon';

export interface LinkProps extends ComponentProps<'a'> {
  href: string;
  text?: string;
  startIcon?: IconName;
  external?: boolean;
  showExternalIcon?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  text,
  startIcon,
  external,
  showExternalIcon,
  className,
  children,
  ...props
}) => {
  const isExternal =
    (showExternalIcon ?? true) && (external ?? /^https?:\/\//.test(href));

  return (
    <a
      {...props}
      className={clsx('ves-link', className)}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {startIcon && (
        <Icon
          className="ves-link__icon ves-link__icon--start"
          name={startIcon}
        />
      )}
      {text ?? children}
      {isExternal && (
        <Icon
          className="ves-link__icon ves-link__icon--external"
          name="external-link"
          aria-label="(opens in new tab)"
        />
      )}
    </a>
  );
};

export default Link;
