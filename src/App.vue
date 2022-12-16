<template>
  <div
    class="theme-wrapper"
    :class="isWhiteTheme ? 'theme-wrapper--white' : 'theme-wrapper--black'"
  >
    <div class="main-wrapper">
      <UIButton
        style="margin-bottom: 1rem"
        @click="isWhiteTheme = !isWhiteTheme"
      >
        Сменить тему
      </UIButton>
      <div class="content-wrapper">
        <Profile :isWhiteTheme="isWhiteTheme" />
        <InventoryGrid :sizeGrid="sizeGrid" :sizeCell="sizeCell" />
      </div>
      <div class="notice-wrapper">
        <Notice />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIButton from "./components/ui/UIButton.vue";
import Profile from "./components/Profile.vue";
import InventoryGrid from "./components/inventoryGrid/InventoryGrid.vue";
import Notice from "./components/Notice.vue";
import { ref } from "vue";

const sizeGrid = ref(5);
const sizeCell = ref(10);
const isWhiteTheme = ref(false);
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables" as *;

.main-wrapper {
  margin: auto;
  padding: 3.2rem;
  max-width: fit-content;
}

.theme-wrapper {
  width: 100%;
  height: 100%;
  background: $primary;
  transition: background 0.5s ease-in-out;

  &--white {
    --primary: white;
    --secondary: #d8e3ea;
    --primary-border-color: #909697;
    --primary-text-color: #3b3b3b;
    --secondary-text-color: #000;
    --skeleton-base-color: #8a9297;
    --skeleton-shine-color: #a8b9b6;
  }

  &--black {
    --primary: #1d1d1d;
    --secondary: #262626;
    --primary-border-color: #4d4d4d;
    --primary-text-color: #fff;
    --secondary-text-color: #cecece;
    --skeleton-base-color: #333333;
    --skeleton-shine-color: #444444;
  }
}

.content-wrapper {
  display: flex;
  justify-content: center;
  height: 50rem;
}
</style>
