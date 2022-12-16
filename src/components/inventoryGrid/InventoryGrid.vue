<template>
  <div class="inventory">
    <ul
      class="inventory__list"
      :style="`grid-template-columns: repeat(${sizeGrid}, ${sizeCell}rem)`"
    >
      <li
        v-for="n in props.sizeGrid ** 2"
        :key="n"
        class="inventory__list__item"
      ></li>
    </ul>
    <InventoryModal />
  </div>
</template>

<script setup lang="ts">
import InventoryModal from "./InventoryModal.vue";

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
</script>

<style scooped lang="scss">
.inventory {
  position: relative;

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
</style>
