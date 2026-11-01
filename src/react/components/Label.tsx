import clsx from 'clsx';
import { useEffect } from 'react';
import type { ComponentProps } from 'react';
import type { IconName } from '@core/tokens/icons';
import Icon from './Icon';
import Tooltip from './Tooltip';

export interface LabelOptions {
  text?: string;
  startIcon?: IconName;
  endIcon?: IconName;
  iconOnly?: boolean;
}

export interface LabelProps
  extends Omit<ComponentProps<'span'>, 'children' | 'title'>, LabelOptions {}

const getIconLabel = (icon?: IconName): string | undefined => {
  if (!icon) {
    return undefined;
  }

  return icon.replaceAll('-', ' ');
};

const Label: React.FC<LabelProps> = ({
  text,
  startIcon,
  endIcon,
  iconOnly,
  className,
  ...props
}) => {
  const hasIcon = Boolean(startIcon || endIcon);
  const showText = Boolean(text) && !(iconOnly && hasIcon);
  const accessibleName =
    text || getIconLabel(startIcon) || getIconLabel(endIcon);
  const startIconLabel = showText ? undefined : text || getIconLabel(startIcon);
  const endIconLabel = showText
    ? undefined
    : text
      ? startIcon
        ? undefined
        : text
      : getIconLabel(endIcon);

  useEffect(() => {
    if (!text && !hasIcon) {
      console.warn('Label has no text or icon to display.');
    } else if (iconOnly && !hasIcon) {
      console.warn(
        `"${text}" is set to iconOnly but has no icon, so its text is shown instead for accessibility.`
      );
    }
  }, [text, hasIcon, iconOnly]);

  if (!text && !hasIcon) {
    return null;
  }

  return (
    <Tooltip
      {...props}
      className={clsx('ves-label', className)}
      title={accessibleName}
      showOnlyWhenTruncated={showText}
    >
      {startIcon && (
        <Icon
          name={startIcon}
          className="ves-label__icon"
          data-slot="start-icon"
          aria-label={startIconLabel}
        />
      )}

      {showText && (
        <span className="ves-label__text clamp-text" data-slot="text">
          {text}
        </span>
      )}

      {endIcon && (
        <Icon
          name={endIcon}
          className="ves-label__icon"
          data-slot="end-icon"
          aria-label={endIconLabel}
        />
      )}
    </Tooltip>
  );
};

export default Label;
