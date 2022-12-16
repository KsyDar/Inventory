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
.notice {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  margin-top: 2.4rem;
  padding: 1.8rem;
  width: 100%;
  position: relative;

  &__image {
    position: absolute;
    top: 14px;
    right: 14px;
  }
}
</style>
