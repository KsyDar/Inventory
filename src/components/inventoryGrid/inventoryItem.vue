<template>
  <div class="inventory-item" v-if="props.item">
    <div class="inventory-item__image">
      <img :src="props.item.image" alt="" />
    </div>
    <div class="inventory-item__counter">{{ props.item.counter }}</div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryItemType } from "@/types/inventory";

type PropType = {
  item?: InventoryItemType;
};

const props = defineProps<PropType>();
</script>

<style scooped lang="scss">
.inventory-item {
  position: relative;
  display: flex;
  height: 100%;

  &__image {
    margin: auto;
  }

  &__counter {
    position: absolute;
    top: 100%;
    translate: 0 -100%;
    right: -0.1rem;
    height: 1.6rem;
    padding: 0.2rem 0.4rem;
    border: 1px solid #4d4d4d;
    border-radius: 6px 0px 0px 0px;
    color: #4d4d4d;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
