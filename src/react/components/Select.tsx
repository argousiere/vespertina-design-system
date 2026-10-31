import clsx from 'clsx';
import { ButtonVariant } from '@core/models/ButtonModel';
import useDropdown from '../hooks/useDropdown';
import type { Selection } from '../hooks/useSelection';
import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown';
import type { MenuListOption } from './MenuList';
import SearchableList from './SearchableList';
import type { SearchableListProps } from './SearchableList';

export type SelectProps<T extends string = string> = Omit<
  DropdownProps,
  'label' | 'variant' | 'iconOnly' | 'dropdown' | 'children'
> &
  Pick<
    SearchableListProps<T>,
    | 'showIcon'
    | 'emptyMessage'
    | 'noResultsMessage'
    | 'searchLabel'
    | 'searchPlaceholder'
  > & {
    selection: Selection<MenuListOption<T>>;
    placeholder?: string;
  };

const Select = <T extends string = string>({
  selection,
  showIcon,
  emptyMessage,
  noResultsMessage,
  searchLabel,
  searchPlaceholder,
  placeholder,
  anchor,
  onOpenChange,
  className,
  'aria-label': ariaLabel,
  ...props
}: SelectProps<T>) => {
  const dropdown = useDropdown({ anchor, onOpenChange });
  const [firstSelectedItem, ...otherSelectedItems] = selection.selectedItems;

  const selectedLabel =
    firstSelectedItem && otherSelectedItems.length > 0
      ? `${firstSelectedItem.label} (+${otherSelectedItems.length})`
      : firstSelectedItem?.label;

  const options = selection.items.map((item) => {
    return {
      ...item,
      role: selection.multiselect ? 'menuitemcheckbox' : 'menuitemradio',
      selected: selection.isSelected(item),
    };
  });

  return (
    <Dropdown
      {...props}
      dropdown={dropdown}
      className={clsx('ves-select', className)}
      variant={ButtonVariant.SECONDARY}
      label={selectedLabel ?? placeholder ?? 'Select'}
    >
      <SearchableList
        className="ves-select__list"
        aria-label={ariaLabel}
        options={options}
        showIcon={showIcon}
        emptyMessage={emptyMessage}
        noResultsMessage={noResultsMessage}
        searchLabel={searchLabel}
        searchPlaceholder={searchPlaceholder}
        onMenuItemClick={(value) => {
          const item = selection.items.find((candidate) => {
            return candidate.value === value;
          });

          if (item) {
            selection.selectItems(item);
          }

          if (!selection.multiselect) {
            dropdown.toggle(false);
          }
        }}
      />
    </Dropdown>
  );
};

export default Select;
