<template>
  <div class="remover">
    <input
      type="text"
      :max="props.inventoryItem.counter"
      class="remover__input"
      v-model="inputValue"
      @keydown="inputKeyPress"
    />
    <div class="remover__buttons">
      <UIButton :type="ButtonType.SECONDARY" @click="emit('cancel')">
        Отмена
      </UIButton>
      <UIButton @click="remove"> Подтвердить </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryItemType } from "@/types/inventory";
import UIButton from "./UIButton.vue";
import { ButtonType } from "@/types/button";

import { ref } from "vue";

type PropType = {
  inventoryItem: InventoryItemType;
};

type EmitType = {
  (e: "cancel"): void;
  (e: "remove", value: number): void;
};

const props = defineProps<PropType>();
const emit = defineEmits<EmitType>();

const inputValue = ref(props.inventoryItem.counter.toString());

const remove = () => {
  let value = parseInt(inputValue.value);
  if (isNaN(value)) {
    emit("remove", props.inventoryItem.counter);
    return;
  }

  if (value > props.inventoryItem.counter) {
    value = props.inventoryItem.counter;
  }

  const newCounter = props.inventoryItem.counter - value;
  emit("remove", newCounter);
};

const inputKeyPress = (evt: KeyboardEvent) => {
  const keyPressed = evt.key;

  const keysAllowed = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
  ];
  if (!keysAllowed.includes(keyPressed)) {
    evt.preventDefault();
  }
};
</script>

<style scooped lang="scss">
@use "@/assets/styles/variables" as *;

.remover {
  background: $secondary;
  border: 0.1rem solid $primary-border-color;
  border-radius: 0 1.2rem 1.2rem 0;
  position: absolute;
  top: 100%;
  translate: 0 -100%;
  left: -0.2rem;
  padding: 2rem;
  overflow: hidden;

  &__input {
    background: $secondary;
    padding: 1.2rem;
    margin-bottom: 2rem;
    border-radius: 0.4rem;
    border: 0.1rem solid $primary-border-color;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: $primary-border-color;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>