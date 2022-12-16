<template>
  <div class="inventory">
    <ul
      class="inventory__list"
      :style="{
        'grid-template-columns': `repeat(${sizeGrid}, ${sizeCell}rem)`,
        'grid-template-rows': `repeat(${sizeGrid}, ${sizeCell}rem)`,
      }"
    >
      <li
        v-for="index in props.sizeGrid ** 2"
        :key="index"
        class="inventory__list__item"
        @drop="onDrop($event, index)"
        @dragover.prevent
        @dragenter.prevent
      >
        <InventoryItem
          draggable
          v-if="inventoryStore.inventory.has(index)"
          :item="inventoryStore.inventory.get(index)"
          @dragstart="startDrag($event, index)"
          @click="openModal(index)"
        />
      </li>
    </ul>
    <transition-group name="list">
      <InventoryModal
        v-if="selectedItem"
        v-model="isModalOpened"
        :inventoryItem="selectedItem"
        @close="closeModal"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import InventoryModal from "./InventoryModal.vue";
import InventoryItem from "./inventoryItem.vue";
import { useInventoryStore } from "../../stores/inventory";
import { ref } from "vue";
import type { InventoryItemType } from "../../types/inventory";

const props = defineProps({
  sizeGrid: {
    type: Number,
    default: 1,
  },
  sizeCell: {
    type: Number,
    default: 10,
  },
});

const startDrag = (evt: DragEvent, item: number) => {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("index", item.toString());
  }
};

const onDrop = (evt: DragEvent, newIndex: number) => {
  if (evt.dataTransfer) {
    const oldIndex = evt.dataTransfer.getData("index");
    inventoryStore.changePosition(parseInt(oldIndex), newIndex);
  }
};

const inventoryStore = useInventoryStore();

const isModalOpened = ref(false);
const selectedItem = ref<InventoryItemType | null>(null);

const openModal = (index: number) => {
  const inventoryItem = inventoryStore.inventory.get(index);
  if (inventoryItem) {
    selectedItem.value = inventoryItem;
    isModalOpened.value = true;
  }
};

const closeModal = () => {
  selectedItem.value = null;
};
</script>

<style scooped lang="scss">
.inventory {
  position: relative;
  overflow: hidden;

  &__list {
    height: 100%;
    display: grid;
    grid-gap: 1px;
    background: #4d4d4d;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;

    &__item {
      background: #262626;
    }
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s linear;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.list-leave-active {
  position: absolute;
}
</style>
