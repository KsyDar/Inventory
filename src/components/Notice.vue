<template>
  <div class="notice">
    <div class="notice__image">
      <CloseIcon class="icon" />
    </div>
    <UISkeleton width="68rem" height="3.6rem" />
  </div>
</template>

<script setup lang="ts">
import UISkeleton from "./ui/UISkeleton.vue";
import CloseIcon from "@/assets/icons/close.svg";
</script>

<style scooped lang="scss">
@use "@/assets/styles/variables" as *;

.notice {
  background: $secondary;
  border: 0.1rem solid $primary-border-color;
  border-radius: 1.2rem;
  margin-top: 2.4rem;
  padding: 1.8rem;
  width: 100%;
  position: relative;
  transition: background 0.5s ease-in-out;

  &__image {
    position: absolute;
    top: 14px;
    right: 14px;
  }
}
</style>
