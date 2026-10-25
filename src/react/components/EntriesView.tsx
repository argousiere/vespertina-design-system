import clsx from 'clsx';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import EntryList, { type EntryListProps } from './EntryList';
import Gallery from './Gallery';
import SegmentedButtons from './SegmentedButtons';
import { EntriesViewMode } from '../constants';

export interface EntriesViewProps
  extends Omit<ComponentProps<'div'>, 'children'>,
    Pick<EntryListProps, 'entryListTitle' | 'headingLevel' | 'items'> {
  defaultView?: EntriesViewMode;
  onViewChange?: (view: EntriesViewMode) => void;
}

const EntriesView: React.FC<EntriesViewProps> = ({
  entryListTitle,
  headingLevel,
  items,
  defaultView,
  onViewChange,
  className,
  ...props
}) => {
  const [view, setView] = useState(defaultView ?? EntriesViewMode.LIST);

  return (
    <div {...props} className={clsx('ves-entries-view', className)}>
      <div className="ves-entries-view__header">
        <SegmentedButtons<EntriesViewMode>
          aria-label="View"
          options={[
            { value: EntriesViewMode.LIST, label: 'List', icon: 'list' },
            { value: EntriesViewMode.GALLERY, label: 'Gallery', icon: 'grid' },
          ]}
          value={view}
          onValueChange={(value) => {
            setView(value);
            onViewChange?.(value);
          }}
        />
      </div>

      {view === EntriesViewMode.LIST ? (
        <EntryList
          entryListTitle={entryListTitle}
          headingLevel={headingLevel}
          items={items}
        />
      ) : (
        <Gallery items={items.map(({ disabled, ...item }) => item)} />
      )}
    </div>
  );
};

export default EntriesView;
