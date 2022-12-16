<template>
  <div class="inventory-modal">
    <div class="inventory-modal__close-image">
      <CloseIcon class="icon" />
    </div>

    <div class="inventory-modal__item-image">
      <img src="" alt="" />
    </div>

    <div class="inventory-modal__data">
      <UISkeleton class="inventory-modal__title" width="21rem" height="3rem" />
      <UISkeleton
        class="inventory-modal__info-block"
        width="21rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="21rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="21rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="18rem"
        height="1rem"
      />
      <UISkeleton
        class="inventory-modal__info-block"
        width="8rem"
        height="1rem"
      />
    </div>

    <button class="inventory-modal__button-delete">Удалить предмет</button>
  </div>
</template>

<script setup lang="ts">
import UISkeleton from "../ui/UISkeleton.vue";
import CloseIcon from "@/assets/icons/close.svg";
</script>

<style scooped lang="scss">
.inventory-modal {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid #4d4d4d;
  border-radius: 0 12px 12px 0;
  padding: 1.8rem 1.5rem;

  &__close-image {
    position: absolute;
    top: 14px;
    right: 14px;
  }

  &__item-image {
    width: 18rem;
    height: 18rem;
  }

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 0;
    border-top: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
  }

  &__title {
    margin-bottom: 2.4rem;
  }

  &__info-block {
    margin-bottom: 1.6rem;
  }

  &__button-delete {
    background: #fa7272;
    border-radius: 8px;
    color: #fff;
    padding: 1.1rem 5.5rem;
    margin-top: 1.8rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
