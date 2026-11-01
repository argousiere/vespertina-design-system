import { useEffect } from 'react';

const HIDE_DELAY_MS = 100;

export interface UseTooltipEventsOptions {
  enabled: boolean;
  triggerEl: HTMLElement | null;
  tooltipEl: HTMLElement | null;
  focusableAncestorEl: HTMLElement | null;
  hideDelayMs?: number;
}

const useTooltipEvents = ({
  enabled,
  triggerEl,
  tooltipEl,
  focusableAncestorEl,
  hideDelayMs,
}: UseTooltipEventsOptions) => {
  useEffect(() => {
    if (!enabled || !triggerEl || !tooltipEl) {
      return;
    }

    const focusTarget = focusableAncestorEl ?? triggerEl;
    const controller = new AbortController();
    let hideTimeout: number | undefined;
    let pointerType = '';

    const toggle = (open?: boolean) => {
      window.clearTimeout(hideTimeout);
      tooltipEl.togglePopover(open);
    };

    const hideLater = () => {
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(() => {
        toggle(false);
      }, hideDelayMs ?? HIDE_DELAY_MS);
    };

    [focusTarget, tooltipEl].forEach((element) => {
      element.addEventListener(
        'pointerenter',
        (event) => {
          if (event.pointerType === 'mouse') {
            toggle(true);
          }
        },
        { signal: controller.signal }
      );
      element.addEventListener(
        'pointerleave',
        (event) => {
          if (event.pointerType === 'mouse') {
            hideLater();
          }
        },
        { signal: controller.signal }
      );
    });

    if (!focusableAncestorEl) {
      triggerEl.addEventListener(
        'pointerdown',
        (event) => {
          pointerType = event.pointerType;
        },
        { signal: controller.signal }
      );
      triggerEl.addEventListener(
        'click',
        () => {
          if (pointerType !== 'mouse') {
            toggle();
          }
        },
        { signal: controller.signal }
      );
    }

    focusTarget.addEventListener(
      'focus',
      () => {
        if (focusTarget.matches(':focus-visible')) {
          toggle(true);
        }
      },
      { signal: controller.signal }
    );
    focusTarget.addEventListener(
      'blur',
      () => {
        toggle(false);
      },
      { signal: controller.signal }
    );

    document.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Escape') {
          toggle(false);
        }
      },
      { signal: controller.signal }
    );
    document.addEventListener(
      'pointerdown',
      (event) => {
        const target = event.target as Node;

        if (!focusTarget.contains(target) && !tooltipEl.contains(target)) {
          toggle(false);
        }
      },
      { signal: controller.signal }
    );

    return () => {
      window.clearTimeout(hideTimeout);
      controller.abort();
    };
  }, [enabled, triggerEl, tooltipEl, focusableAncestorEl, hideDelayMs]);
};

export default useTooltipEvents;
