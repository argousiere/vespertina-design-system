import { describe, expect, it } from 'vitest';
import type { SelectionItem } from './SelectionModel';
import { SelectionModel } from './SelectionModel';

const aiur = { value: 'aiur' };
const braxis = { value: 'braxis' };
const ceres = { value: 'ceres' };

describe('selectionModel', () => {
  it('should return undefined from getSelection when empty in single select', () => {
    expect(new SelectionModel({ items: [] }).getSelection()).toBeUndefined();
  });

  it('should return an empty array from getSelection when empty in multiselect', () => {
    expect(
      new SelectionModel({ items: [], multiselect: true }).getSelection()
    ).toStrictEqual([]);
  });

  it('should return false from isSelected when empty', () => {
    expect(
      new SelectionModel<SelectionItem<string>>({ items: [] }).isSelected(aiur)
    ).toBe(false);
  });

  describe('selectItems', () => {
    it('should replace the selection in single select', () => {
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [aiur],
      });
      model.selectItems(braxis);

      expect(model.selectedItems).toStrictEqual([braxis]);
    });

    it('should remove an already selected item in single select', () => {
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [aiur],
      });
      model.selectItems(aiur);

      expect(model.selectedItems).toStrictEqual([]);
    });

    it('should append items in click order in multiselect', () => {
      const model = new SelectionModel({
        items: [aiur, braxis, ceres],
        selectedItems: [ceres],
        multiselect: true,
      });
      model.selectItems(aiur, braxis);

      expect(model.selectedItems).toStrictEqual([ceres, aiur, braxis]);
    });

    it('should remove an already selected item in multiselect', () => {
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [aiur, braxis],
        multiselect: true,
      });
      model.selectItems(aiur);

      expect(model.selectedItems).toStrictEqual([braxis]);
    });

    it('should clear the selection when called without items', () => {
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [aiur, braxis],
        multiselect: true,
      });
      model.selectItems();

      expect(model.selectedItems).toStrictEqual([]);
    });
  });

  describe('isSelected', () => {
    it('should return true when every given item is selected', () => {
      expect(
        new SelectionModel({
          items: [aiur, braxis, ceres],
          selectedItems: [aiur, braxis],
          multiselect: true,
        }).isSelected(aiur, braxis)
      ).toBe(true);
    });

    it('should return false when any given item is not selected', () => {
      expect(
        new SelectionModel({
          items: [aiur, braxis, ceres],
          selectedItems: [aiur],
          multiselect: true,
        }).isSelected(aiur, ceres)
      ).toBe(false);
    });

    it('should return false when no items are given', () => {
      expect(
        new SelectionModel({
          items: [aiur],
          selectedItems: [aiur],
        }).isSelected()
      ).toBe(false);
    });
  });

  describe('getSelection', () => {
    it('should return the selected item in single select', () => {
      expect(
        new SelectionModel({
          items: [aiur, braxis],
          selectedItems: [braxis],
        }).getSelection()
      ).toStrictEqual(braxis);
    });

    it('should return the selected items in multiselect', () => {
      expect(
        new SelectionModel({
          items: [aiur, braxis],
          selectedItems: [aiur, braxis],
          multiselect: true,
        }).getSelection()
      ).toStrictEqual([aiur, braxis]);
    });
  });

  describe('toggleMultiselect', () => {
    it('should switch single select to multiselect', () => {
      const model = new SelectionModel({ items: [aiur] });
      model.toggleMultiselect();

      expect(model.multiselect).toBe(true);
    });

    it('should keep only the first selected item when switching to single select', () => {
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [braxis, aiur],
        multiselect: true,
      });
      model.toggleMultiselect();

      expect(model.selectedItems).toStrictEqual([braxis]);
    });
  });

  describe('setItems', () => {
    it('should replace the items', () => {
      const model = new SelectionModel({ items: [aiur] });
      model.setItems([braxis, ceres]);

      expect(model.items).toStrictEqual([braxis, ceres]);
    });

    it('should drop selected items that are no longer in the items', () => {
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [aiur, braxis],
        multiselect: true,
      });
      model.setItems([braxis, ceres]);

      expect(model.selectedItems).toStrictEqual([braxis]);
    });

    it('should point selected items at the new item objects', () => {
      const newBraxis = { value: 'braxis' };
      const model = new SelectionModel({
        items: [aiur, braxis],
        selectedItems: [braxis],
      });
      model.setItems([aiur, newBraxis]);

      expect(model.selectedItems[0]).toBe(newBraxis);
    });
  });
});
