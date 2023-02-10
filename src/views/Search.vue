<script setup lang="ts">
import { ref } from "vue";

enum Status {
  NORMAL = "normal",
  LOADING = "loading",
  SUCCESS = "success",
  FAIL = "fail",
}

const status = ref(Status.SUCCESS);
</script>

<template>
  <section class="search_container">
    <div class="search_input">
      <input type="text" placeholder="Please input img url...">
      <button>
        <Icon v-if="status === Status.NORMAL" class="result_logo" icon="vaadin:search" />
        <Icon v-if="status === Status.LOADING" class="result_logo" icon="line-md:loading-loop" />
        <div class="result_logo">
          <span v-if="status === Status.SUCCESS">😍</span>
          <span v-if="status === Status.FAIL">😒</span>
        </div>
      </button>
    </div>
    <div class="search_results">
      <div class="search_res">
        <img src="https://images.unsplash.com/photo-1675969563450-522861e76929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="">
      </div>
      <div class="search_res">
        <img src="https://images.unsplash.com/photo-1675969563450-522861e76929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="">
      </div>
      <div class="search_res">
        <img src="https://images.unsplash.com/photo-1675969563450-522861e76929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="">
      </div>
      <div class="search_res">
        <img src="https://images.unsplash.com/photo-1675969563450-522861e76929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="">
      </div>
      <div class="search_res">
        <img src="https://images.unsplash.com/photo-1675969563450-522861e76929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/_variable.scss";

.search {
  &_container {
    padding: 5rem 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &_input {
    position: relative;
    width: 50%;

    input {
      width: 100%;
      height: 4.2rem;
      border: none;
      border-bottom: 1px solid $secondary-color;
      padding-left: 1.2rem;
      padding-right: 4.8rem;
      font-family: "Itim", cursive;
      font-size: 2.4rem;
      color: $primary-color;

      transition: border-color 0.3s ease-in-out;

      &::-webkit-input-placeholder {
        color: rgb(207, 207, 207);
      }

      &:focus {
        outline: none;
        border-color: $primary-color;

        & + button {
          .result_logo {
            color: $primary-color;
          }
        }
      }

    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0 1.2rem;
      border: none;
      background-color: transparent;
      cursor: pointer;

      .result_logo {
        // width: 2.4rem;
        // height: 2.4rem;
        font-size: 2.4rem;
        color: $secondary-color;
        transition: all 0.3s ease-in-out;
      }
    };
  }

  &_results {
    width: 100%;
    padding: 2.4rem 1.2rem;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  &_res {
      width: 32rem;
      height: 24rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
}
</style>
