import clsx from 'clsx';
import { useState } from 'react';
import MenuList from './MenuList';
import type { MenuListProps } from './MenuList';
import TextInput from './TextInput';

export interface SearchableListProps<
  T extends string = string,
> extends MenuListProps<T> {
  searchLabel?: string;
  searchPlaceholder?: string;
  noResultsMessage?: string;
}

const SearchableList = <T extends string = string>({
  options,
  value,
  onValueChange,
  showIcon,
  emptyMessage,
  noResultsMessage,
  searchLabel,
  searchPlaceholder,
  className,
  'aria-label': ariaLabel,
  ...props
}: SearchableListProps<T>) => {
  const [query, setQuery] = useState('');

  const filteredOptions = options.filter((option) => {
    return option.label.toLowerCase().includes(query.trim().toLowerCase());
  });

  const displayedEmptyMessage =
    options.length > 0
      ? (noResultsMessage ?? 'No results found.')
      : emptyMessage;

  return (
    <div {...props} className={clsx('ves-searchable-list', className)}>
      <div className="ves-searchable-list__search">
        <TextInput
          icon="search"
          aria-label={searchLabel ?? 'Search'}
          placeholder={searchPlaceholder ?? 'Search'}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onClear={() => {
            setQuery('');
          }}
        />
      </div>

      <MenuList
        aria-label={ariaLabel}
        options={filteredOptions}
        value={value}
        onValueChange={onValueChange}
        showIcon={showIcon}
        emptyMessage={displayedEmptyMessage}
      />
    </div>
  );
};

export default SearchableList;
