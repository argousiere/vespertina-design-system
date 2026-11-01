import { useId, useState } from 'react';
import type { ComponentProps } from 'react';
import useIsTruncated from '../hooks/useIsTruncated';
import useTooltipEvents from '../hooks/useTooltipEvents';

export interface TooltipProps extends Omit<ComponentProps<'span'>, 'title'> {
  title?: string;
  disabled?: boolean;
  showOnlyWhenTruncated?: boolean;
}

const FOCUSABLE_SELECTOR =
  'a[href], button, input, select, textarea, summary, [tabindex]';

const Tooltip: React.FC<TooltipProps> = ({
  title,
  disabled,
  showOnlyWhenTruncated,
  style,
  tabIndex,
  'aria-describedby': ariaDescribedBy,
  children,
  ...props
}) => {
  const id = useId();
  const tooltipId = `ves-tooltip-${id}`;
  const anchorName = `--ves-tooltip-${id.replace(/[^\w-]/g, '')}`;

  const [triggerEl, setTriggerEl] = useState<HTMLSpanElement | null>(null);
  const [tooltipEl, setTooltipEl] = useState<HTMLDivElement | null>(null);

  const isTruncated = useIsTruncated(showOnlyWhenTruncated ? triggerEl : null);
  const text = title ?? triggerEl?.textContent ?? '';
  const active =
    Boolean(text) && !disabled && (!showOnlyWhenTruncated || isTruncated);
  const focusableAncestorEl =
    triggerEl?.parentElement?.closest<HTMLElement>(FOCUSABLE_SELECTOR) ?? null;

  useTooltipEvents({
    enabled: active,
    triggerEl,
    tooltipEl,
    focusableAncestorEl,
  });

  return (
    <>
      <span
        {...props}
        ref={setTriggerEl}
        tabIndex={active && !focusableAncestorEl ? (tabIndex ?? 0) : tabIndex}
        aria-describedby={
          active
            ? [ariaDescribedBy, tooltipId].filter(Boolean).join(' ')
            : ariaDescribedBy
        }
        style={active ? { ...style, anchorName } : style}
      >
        {children}
      </span>

      {active && (
        <div
          ref={setTooltipEl}
          id={tooltipId}
          role="tooltip"
          popover="manual"
          className="ves-tooltip"
          style={{ positionAnchor: anchorName }}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Tooltip;
