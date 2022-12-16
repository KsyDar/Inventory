<template>
  <div
    class="inventory-modal"
    :class="{ 'inventory-modal--open': props.modelValue }"
  >
    <div class="inventory-modal__close-image">
      <CloseIcon class="icon" @click="close" />
    </div>

    <div class="inventory-modal__item-image">
      <img :src="inventoryItem.image" alt="" />
    </div>

    <div class="inventory-modal__data">
      <UISkeleton class="inventory-modal__title" width="21rem" height="3rem" />
      <UISkeleton
        class="inventory-modal__info-block"
        width="21rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="21rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="21rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="18rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="8rem"
        height="1rem"
      />
    </div>

    <button
      v-if="!isRemoveMode"
      @click="isRemoveMode = true"
      class="inventory-modal__button-delete"
    >
      <span>Удалить предмет</span>
    </button>
    <UIInputRemover
      @cancel="isRemoveMode = false"
      @remove="removeInventoryItem"
      v-else
      :inventory-item="props.inventoryItem"
    />
  </div>
</template>

<script setup lang="ts">
import UISkeleton from "../ui/UISkeleton.vue";
import CloseIcon from "@/assets/icons/close.svg";
import UIInputRemover from "../ui/UIInputRemover.vue";
import type { InventoryItemType } from "@/types/inventory";
import { ref } from "vue";
import { useInventoryStore } from "@/stores/inventory";

type PropType = {
  modelValue: boolean;
  inventoryItem: InventoryItemType;
};

type EmitType = {
  (e: "close"): void;
  (e: "update:modelValue", value: boolean): void;
};

const props = defineProps<PropType>();
const emit = defineEmits<EmitType>();
const inventoryStore = useInventoryStore();

const isRemoveMode = ref(false);

const close = () => {
  emit("update:modelValue", false);
  emit("close");
};

const removeInventoryItem = (newCount: number) => {
  inventoryStore.updatePositionCounter(props.inventoryItem.position, newCount);
  isRemoveMode.value = false;
  emit("update:modelValue", false);
  emit("close");
};
</script>

<style scooped lang="scss">
.inventory-modal {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid #4d4d4d;
  border-radius: 0 12px 12px 0;
  padding: 1.8rem 1.5rem;

  &--open {
    display: flex;
    flex-direction: column;
  }

  &__close-image {
    position: absolute;
    top: 14px;
    right: 14px;
  }

  &__item-image {
    margin: 0 auto;
    width: 13rem;
    height: 13rem;
    margin-bottom: 2rem;
    margin-top: 3.7rem;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 0;
    border-top: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
  }

  &__title {
    margin-bottom: 2.4rem;
  }

  &__info-block {
    margin-bottom: 1.6rem;
  }

  &__button-delete {
    background: #fa7272;
    border-radius: 8px;
    color: #fff;
    padding: 1.1rem;
    margin-top: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    border: none;

    & > span {
      margin: auto;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
