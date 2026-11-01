export interface SelectionItem<T extends string = string> {
  value: T;
}

export interface SelectionModelOptions<I extends SelectionItem> {
  items: I[];
  selectedItems?: I[];
  multiselect?: boolean;
}

export class SelectionModel<I extends SelectionItem = SelectionItem> {
  items: I[];
  selectedItems: I[];
  multiselect: boolean;

  constructor({ items, selectedItems, multiselect }: SelectionModelOptions<I>) {
    this.items = items;
    this.selectedItems = selectedItems ?? [];
    this.multiselect = multiselect ?? false;
  }

  setItems(items: I[]): void {
    this.items = items;
    this.selectedItems = this.selectedItems
      .map((selectedItem) => {
        return items.find((item) => {
          return item.value === selectedItem.value;
        });
      })
      .filter((item) => {
        return item !== undefined;
      });
  }

  toggleMultiselect(): void {
    this.multiselect = !this.multiselect;

    if (!this.multiselect) {
      this.selectedItems = this.selectedItems.slice(0, 1);
    }
  }

  isSelected(...items: I[]): boolean {
    return (
      items.length > 0 &&
      items.every((item) => {
        return this.selectedItems.some((selectedItem) => {
          return selectedItem.value === item.value;
        });
      })
    );
  }

  selectItems(...items: I[]): void {
    if (items.length === 0) {
      this.selectedItems = [];
      return;
    }

    items.forEach((item) => {
      if (this.isSelected(item)) {
        this.selectedItems = this.selectedItems.filter((selectedItem) => {
          return selectedItem.value !== item.value;
        });
      } else {
        this.selectedItems = this.multiselect
          ? [...this.selectedItems, item]
          : [item];
      }
    });
  }

  getSelection(): I | I[] | undefined {
    return this.multiselect ? this.selectedItems : this.selectedItems[0];
  }
}
