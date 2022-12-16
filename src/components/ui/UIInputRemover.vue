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
      <button class="remover__buttons__item" @click="emit('cancel')">
        Отмена
      </button>
      <button
        class="remover__buttons__item remover__buttons__item--confirm"
        @click="remove"
      >
        Подтвердить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryItemType } from "@/types/inventory";
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
.remover {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 0 12px 12px 0;
  position: absolute;
  top: calc(100% - 13.7rem);
  left: -1px;
  padding: 2rem;
  overflow: hidden;

  &__input {
    background: #262626;
    padding: 1.2rem;
    margin-bottom: 2rem;
    border-radius: 0.4rem;
    border: 1px solid #4d4d4d;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4d4d4d;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;

    &__item {
      padding: 0.8rem 1.5rem;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      border-radius: 0.8rem;
      border: none;
      background: #fff;

      &:hover {
        cursor: pointer;
      }

      &--confirm {
        background: #fa7272;
        color: #fff;
      }
    }
  }
}
</style>