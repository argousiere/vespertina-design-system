import React, { cloneElement, useEffect, useId, useState } from 'react';
import type { ComponentProps } from 'react';
import clsx from 'clsx';
import useIsTruncated from '../hooks/useIsTruncated';

export interface TooltipProps
  extends Omit<ComponentProps<'div'>, 'title' | 'children'> {
  title: string | React.ReactNode;
  children: React.ReactElement<triggerElProps>;
  disabled?: boolean;
  showOnlyWhenTruncated?: boolean;
}

type triggerElProps = React.HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>;
};

const HIDE_DELAY_MS = 100;
const FOCUSABLE_SELECTOR = 'a[href], button, input, select, textarea, summary, [tabindex]';

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  disabled = false,
  showOnlyWhenTruncated = false,
  className,
  style,
  ...tooltipProps
}) => {
  const id = useId();
  const tooltipId = `ves-tooltip-${id}`;
  const anchorName = `--tooltip-${id.replace(/[^\w-]/g, '')}`;

  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);
  const [tooltipEl, setTooltipEl] = useState<HTMLDivElement | null>(null);

  const isTruncated = useIsTruncated(showOnlyWhenTruncated ? triggerEl : null);
  const active = !disabled && (!showOnlyWhenTruncated || isTruncated);
  const focusableAncestor =
    triggerEl?.parentElement?.closest<HTMLElement>(FOCUSABLE_SELECTOR) ?? null;

  useEffect(() => {
    if (!active || !triggerEl || !tooltipEl) {
      return;
    }

    const focusTarget = focusableAncestor ?? triggerEl;

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

    for (const element of [focusTarget, tooltipEl]) {
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

    if (!focusableAncestor) {
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
    }

    focusTarget.addEventListener(
      'focus',
      () => focusTarget.matches(':focus-visible') && showTooltip(),
      options
    );
    focusTarget.addEventListener('blur', hideTooltip, options);

    document.addEventListener(
      'keydown',
      (event) => event.key === 'Escape' && hideTooltip(),
      options
    );
    document.addEventListener(
      'pointerdown',
      (event) => {
        const target = event.target as Node;
        if (!focusTarget.contains(target) && !tooltipEl.contains(target)) {
          hideTooltip();
        }
      },
      options
    );

    return () => {
      window.clearTimeout(hideTimeout);
      controller.abort();
    };
  }, [active, triggerEl, tooltipEl, focusableAncestor]);

  if (!active) {
    return cloneElement(children, { ref: setTriggerEl });
  }

  const { props } = children;

  return (
    <>
      {cloneElement(children, {
        ref: setTriggerEl,
        tabIndex: focusableAncestor ? props.tabIndex : (props.tabIndex ?? 0),
        'aria-describedby': [props['aria-describedby'], tooltipId]
          .filter(Boolean)
          .join(' '),
        style: { ...props.style, anchorName },
        title: undefined,
      })}

      <div
        {...tooltipProps}
        ref={setTooltipEl}
        id={tooltipId}
        className={clsx('ves-tooltip', className)}
        role="tooltipEl"
        popover="manual"
        style={{ ...style, positionAnchor: anchorName }}
      >
        {title}
      </div>
    </>
  );
};

export default Tooltip;
