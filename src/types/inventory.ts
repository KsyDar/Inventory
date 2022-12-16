export type Inventory = {
  items: InventoryItemType[];
};

export type InventoryItemType = {
  id: string;
  counter: number;
  image: string;
  position: number;
};
