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
$base-color: #333333;
$shine-color: #444444;
$animation-duration: 1.4s;

.skeleton {
  border-radius: 1.2rem;
  background-color: $base-color;
  background: linear-gradient(
      110deg,
      $base-color 5%,
      $shine-color 35%,
      $base-color 65%
    )
    $base-color;
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
