<template>
  <button class="button" :class="'button--' + props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ButtonType } from "@/types/button";

type PropType = {
  type?: ButtonType;
};

const props = withDefaults(defineProps<PropType>(), {
  type: ButtonType.PRIMARY,
});
</script>

<style lang="scss">
.button {
  padding: 0.8rem 1.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &--primary {
    background: #fa7272;
    color: #fff;
  }

  &--secondary {
    background: #fff;
  }
}
</style>