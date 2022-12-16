import { defineStore } from "pinia";
import type { InventoryItemType } from "@/types/inventory";

type InventoryStore = {
  inventory: Map<number, InventoryItemType>;
};

export const useInventoryStore = defineStore("inventory", {
  state: (): InventoryStore => {
    let items: InventoryItemType[] = [];
    const storageItems = localStorage.getItem("inventory");
    if (!storageItems) {
      items = [
        {
          id: "1",
          counter: 1,
          image: "images/item_1.png",
          position: 1,
        },
        {
          id: "2",
          counter: 3,
          image: "/images/item_2.png",
          position: 2,
        },
        {
          id: "3",
          counter: 5,
          image: "/images/item_3.png",
          position: 3,
        },
      ];
    } else {
      items = JSON.parse(storageItems);
    }

    const mapItems = new Map<number, InventoryItemType>();

    for (const item of items) {
      mapItems.set(item.position, item);
    }
    return {
      inventory: mapItems,
    };
  },
  actions: {
    changePosition(oldPosition: number, newPosition: number) {
      const item = this.inventory.get(oldPosition);
      if (!item) {
        throw new Error("Не найден элемент для смены позиции");
      }
      const newPositionItem = this.inventory.get(newPosition);

      item.position = newPosition;
      this.inventory.delete(oldPosition);
      this.inventory.set(newPosition, item);

      if (newPositionItem) {
        newPositionItem.position = oldPosition;
        this.inventory.set(oldPosition, newPositionItem);
      }

      this.saveInventory();
    },
    updatePositionCounter(index: number, counter: number) {
      const item = this.inventory.get(index);
      if (!item) {
        throw new Error("Не найден элемент для смены позиции");
      }
      item.counter = counter;
      if (item.counter === 0) {
        this.inventory.delete(index);
      }
      this.saveInventory();
    },
    saveInventory() {
      const localInventory = JSON.stringify(
        Array.from(this.inventory.values())
      );
      localStorage.setItem("inventory", localInventory);
    }
  },
});
