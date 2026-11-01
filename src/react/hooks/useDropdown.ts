import clsx from 'clsx';
import { useId } from 'react';
import type { ToggleEvent } from 'react';
import { DropdownAnchor } from '../constants';

export interface UseDropdownOptions {
  anchor?: DropdownAnchor;
  onOpenChange?: (open: boolean) => void;
}

const useDropdown = (options?: UseDropdownOptions) => {
  const id = useId();
  const panelId = `ves-dropdown-${id}`;
  const anchorName = `--ves-dropdown-${id.replace(/[^\w-]/g, '')}`;

  const toggle = (open: boolean) => {
    document.getElementById(panelId)?.togglePopover(open);
  };

  return {
    triggerProps: {
      popoverTarget: panelId,
      style: { anchorName },
    },
    panelProps: {
      id: panelId,
      popover: 'auto' as const,
      className: clsx(
        'ves-dropdown',
        `ves-dropdown--anchor-${options?.anchor ?? DropdownAnchor.START}`
      ),
      style: { positionAnchor: anchorName },
      onToggle: (event: ToggleEvent<HTMLElement>) => {
        options?.onOpenChange?.(event.newState === 'open');
      },
    },
    toggle,
  };
};

export type DropdownController = ReturnType<typeof useDropdown>;

export default useDropdown;
