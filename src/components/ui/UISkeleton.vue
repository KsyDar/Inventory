<template>
  <div class="skeleton" :style="`width: ${width}; height: ${height}`"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: String,
  height: String,
});
</script>

<style scooped lang="scss">
@use "@/assets/styles/variables" as *;
$animation-duration: 1.4s;

.skeleton {
  border-radius: 1.2rem;
  background-color: $skeleton-base-color;
  background: linear-gradient(
      110deg,
      $skeleton-base-color 5%,
      $skeleton-shine-color 35%,
      $skeleton-base-color 65%
    )
    $skeleton-base-color;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: shine-lines $animation-duration infinite linear;
}

@keyframes shine-lines {
  from {
    background-position-x: 140%;
  }
  to {
    background-position-x: -65%;
  }
}
</style>
