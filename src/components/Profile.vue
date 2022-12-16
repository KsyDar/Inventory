<template>
  <div class="profile">
    <img src="../assets/images/Imgprofile.png" alt="" class="profile__image" />
    <div class="profile__data">
      <UISkeleton class="profile__title" width="19rem" height="2.6rem" />
      <UISkeleton class="profile__info-block" width="15.5rem" height="1rem" />
      <UISkeleton class="profile__info-block" width="19rem" height="1rem" />
      <UISkeleton class="profile__info-block" width="17rem" height="1rem" />
      <UISkeleton class="profile__info-block" width="16rem" height="1rem" />
      <UISkeleton class="profile__info-block" width="14rem" height="1rem" />
      <UISkeleton class="profile__footer" width="8rem" height="1rem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UISkeleton from "./ui/UISkeleton.vue";
</script>

<style scooped lang="scss">
@use "@/assets/styles/variables" as *;

.profile {
  background: $secondary;
  margin-right: 2.4rem;
  border: 0.1rem solid $primary-border-color;
  border-radius: 1.2rem;
  padding: 1.8rem 1.4rem;
  transition: background 0.5s ease-in-out;

  &__image {
    border-radius: 0.8rem;
    margin-bottom: 2rem;
  }

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__info-block + &__info-block {
    margin-top: 1.6rem;
  }

  &__title {
    margin-bottom: 2.4rem;
  }

  &__footer {
    margin-top: 2.4rem;
  }
}
</style>
