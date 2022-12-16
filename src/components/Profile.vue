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
.profile {
  background: #262626;
  margin-right: 2.4rem;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  padding: 1.8rem 1.4rem;

  &__image {
    border-radius: 8px;
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
