<template>
  <div class="main-wrapper">
    <div class="content-wrapper">
      <Profile />
      <InventoryGrid :sizeGrid="sizeGrid" :sizeCell="sizeCell" />
    </div>

    <div class="notice-wrapper">
      <Notice />
    </div>
  </div>
</template>

<script setup lang="ts">
import Profile from "./components/Profile.vue";
import InventoryGrid from "./components/inventoryGrid/InventoryGrid.vue";
import Notice from "./components/Notice.vue";
import { ref } from "vue";

const sizeGrid = ref(5);
const sizeCell = ref(10);
</script>

<style scoped lang="scss">
.main-wrapper {
  margin: auto;
  padding: 3.2rem;
  max-width: fit-content;
}
.content-wrapper {
  display: flex;
  justify-content: center;
  height: 50rem;
}
</style>
