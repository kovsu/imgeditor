<script setup lang="ts">
defineProps<{
  type: string
}>();

function togglePanel() {
  console.log("hi");

  document.querySelector(".wait__list")!.classList.toggle("active");
}
</script>

<template>
  <div class="option">
    <p class="option__name">
      <slot name="option_name" />
    </p>
    <div v-if="type === 'text'" class="option__input">
      <input type="text">
    </div>
    <div v-else-if="type === 'range'" class="option__range">
      <input type="range" min="1" max="2" step="0.1" value="1">
    </div>
    <div v-else-if="type === 'wait-list'" class="wait__list">
      <div class="wait__list-active">
        <div class="wait__list-img">
          <img src="https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60s" alt="">
        </div>
        <p>Now editor picture</p>
        <div class="arrow" @click="togglePanel">
          <Icon icon="material-symbols:arrow-drop-down-rounded" />
        </div>
      </div>
      <ul class="wait__list-panel">
        <li class="wait__list-option">
          <div class="wait__list-img">
            <img src="https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60s" alt="">
          </div>
          <p>Now editor picture</p>
        </li>
        <li class="wait__list-option">
          <div class="wait__list-img">
            <img src="https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60s" alt="">
          </div>
          <p>Now editor picture</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/_variable.scss";

.option {
  width: 100%;
  display: flex;

  &__name {
    min-width: 8rem;
    font-size: 2.4rem;
    font-weight: 600;
    color: $primary-color;
  }

  &__input {
    margin-left: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 8rem;
      padding: 0.6rem 1.2rem;
      border-radius: 5px;
      border: none;
      background-color: #F1F1F1;
      text-align: center;
      color: $secondary-color;
      font-size: 1.6rem;
      font-weight: 600;

      &:focus {
        outline: none;
      }
    }
  }

  &__range {
    margin-left: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 8rem;
      border: none;
      background-color: $primary-color;

      &:focus {
        outline: none;
      }
    }
  }
}

.wait__list {
  margin-left: 2.4rem;
  width: 24rem;
  position: relative;

  &.active {
    .wait__list-panel {
      opacity: 1;
      visibility: visible;
    }
    .wait__list-active {
      .arrow {
        transform: rotate(180deg);
      }
      border-radius: 5px 5px 0 0;
    }
  }

  &-active {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 1.2rem;
    border-radius: 5px;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;

    p {
      font-size: 1.6rem;
      font-weight: 600;
      color: $secondary-color;
    }
  }

  &-img {
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 2.4rem;
      height: 2.4rem;
      object-fit: cover;
    }
  }

  &-panel {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    position: absolute;
    background-color: #F1F1F1;
    list-style: none;
    padding: 1.2rem 0;
    margin-top: 0.6rem;
    border-radius: 0 0 5px 5px;
    transition: 0.3s ease-in-out;
  }

  &-option {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.6rem 1.2rem;
    transition: all 0.15s;
    cursor: pointer;

    &:hover {
      background-color: $secondary-color;
    }

    p {
      color: $primary-color;
    }
  }

}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-in;

  svg {
    font-size: 2.4rem;
    color: $primary-color;
  }
}
</style>