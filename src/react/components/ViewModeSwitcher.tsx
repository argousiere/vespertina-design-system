import clsx from 'clsx';
import SegmentedButtons, { type SegmentedButtonsProps } from './SegmentedButtons';

export type ViewModeSwitcherProps<T extends string = string> = SegmentedButtonsProps<T>;

const ViewModeSwitcher = <T extends string = string>({
  className,
  ...props
}: ViewModeSwitcherProps<T>) => (
  <div className={clsx('ves-view-mode-switcher', className)}>
    <SegmentedButtons<T> aria-label="View" {...props} />
  </div>
);

export default ViewModeSwitcher;
