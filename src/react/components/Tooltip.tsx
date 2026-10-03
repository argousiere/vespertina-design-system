import React, { cloneElement, useEffect, useId, useState } from 'react';
import useIsTruncated from '../hooks/useIsTruncated';

export interface TooltipProps {
  title: string;
  children: React.ReactElement<triggerElProps>;
  disabled?: boolean;
  showOnlyWhenTruncated?: boolean;
}

type triggerElProps = React.HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>;
};

const HIDE_DELAY_MS = 100;

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  disabled = false,
  showOnlyWhenTruncated = false,
}) => {
  const id = useId();
  const tooltipId = `ves-tooltip-${id}`;
  const anchorName = `--tooltip-${id.replace(/[^\w-]/g, '')}`;

  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);
  const [tooltipEl, setTooltipEl] = useState<HTMLDivElement | null>(null);

  const isTruncated = useIsTruncated(showOnlyWhenTruncated ? triggerEl : null);
  const active = !disabled && (!showOnlyWhenTruncated || isTruncated);

  useEffect(() => {
    if (!active || !triggerEl || !tooltipEl) {
      return;
    }

    const controller = new AbortController();
    const options = { signal: controller.signal };
    let hideTimeout: number | undefined;
    let pointerType = '';

    const toggle = (force?: boolean) => {
      window.clearTimeout(hideTimeout);
      tooltipEl.togglePopover(force);
    };

    const showTooltip = () => toggle(true);
    const hideTooltip = () => toggle(false);

    const hideDelayed = () => {
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(hideTooltip, HIDE_DELAY_MS);
    };

    for (const element of [triggerEl, tooltipEl]) {
      element.addEventListener(
        'pointerenter',
        (event) => event.pointerType === 'mouse' && showTooltip(),
        options
      );
      element.addEventListener(
        'pointerleave',
        (event) => event.pointerType === 'mouse' && hideDelayed(),
        options
      );
    }

    triggerEl.addEventListener(
      'pointerdown',
      (event) => (pointerType = event.pointerType),
      options
    );
    triggerEl.addEventListener(
      'click',
      () => pointerType !== 'mouse' && toggle(),
      options
    );

    triggerEl.addEventListener(
      'focus',
      () => triggerEl.matches(':focus-visible') && showTooltip(),
      options
    );
    triggerEl.addEventListener('blur', hideTooltip, options);

    document.addEventListener(
      'keydown',
      (event) => event.key === 'Escape' && hideTooltip(),
      options
    );
    document.addEventListener(
      'pointerdown',
      (event) => {
        const target = event.target as Node;
        if (!triggerEl.contains(target) && !tooltipEl.contains(target)) {
          hideTooltip();
        }
      },
      options
    );

    return () => {
      window.clearTimeout(hideTimeout);
      controller.abort();
    };
  }, [active, triggerEl, tooltipEl]);

  if (!active) {
    return cloneElement(children, { ref: setTriggerEl });
  }

  const { props } = children;

  return (
    <>
      {cloneElement(children, {
        ref: setTriggerEl,
        tabIndex: props.tabIndex ?? 0,
        'aria-describedby': [props['aria-describedby'], tooltipId]
          .filter(Boolean)
          .join(' '),
        style: { ...props.style, anchorName },
        title: undefined,
      })}

      <div
        ref={setTooltipEl}
        id={tooltipId}
        className="ves-tooltip"
        role="tooltipEl"
        popover="manual"
        style={{ positionAnchor: anchorName }}
      >
        {title}
      </div>
    </>
  );
};

export default Tooltip;
