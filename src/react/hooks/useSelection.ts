import { useState } from 'react';
import { SelectionModel } from '@core/models/SelectionModel';
import type {
  SelectionItem,
  SelectionModelOptions,
} from '@core/models/SelectionModel';

const useSelection = <I extends SelectionItem>(
  options: SelectionModelOptions<I>
) => {
  const [model] = useState(() => {
    return new SelectionModel(options);
  });
  const [items, setItems] = useState(model.items);
  const [selectedItems, setSelectedItems] = useState(model.selectedItems);
  const [multiselect, setMultiselect] = useState(model.multiselect);

  return {
    items,
    selectedItems,
    multiselect,
    isSelected: (...itemsToCheck: I[]) => {
      return model.isSelected(...itemsToCheck);
    },
    getSelection: () => {
      return model.getSelection();
    },
    selectItems: (...itemsToSelect: I[]) => {
      model.selectItems(...itemsToSelect);
      setSelectedItems(model.selectedItems);
    },
    toggleMultiselect: () => {
      model.toggleMultiselect();
      setMultiselect(model.multiselect);
      setSelectedItems(model.selectedItems);
    },
    setItems: (newItems: I[]) => {
      model.setItems(newItems);
      setItems(model.items);
      setSelectedItems(model.selectedItems);
    },
  };
};

export type Selection<I extends SelectionItem> = ReturnType<
  typeof useSelection<I>
>;

export default useSelection;
