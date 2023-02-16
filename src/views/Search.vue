<script setup lang="ts">
import { ref } from "vue";
import { images } from "../composable/data";

enum Status {
  NORMAL = "normal",
  LOADING = "loading",
  SUCCESS = "success",
  FAIL = "fail",
}

const status = ref(Status.NORMAL);

const url = ref<string>("");

function addImage() {
  if (url.value) {
    const nowEdit = images.value.length === 0;
    images.value.push({
      url: url.value,
      edit: false,
      width: 100,
      height: 100,
      zoom: 1,
      nowEdit,
      position: {
        x: 0,
        y: 0,
      },
    });
    url.value = "";
  }
}

function removeImage(index: number) {
  images.value.splice(index, 1);
  images.value.forEach((img) => {
    img.nowEdit = false;
  });
  images.value[0].nowEdit = true;
}
</script>

<template>
  <section class="search_container">
    <div class="search_input">
      <input v-model="url" type="text" placeholder="Please input img url...">
      <button @click="addImage">
        <Icon v-if="status === Status.NORMAL" class="result_logo" icon="vaadin:search" />
      </button>
    </div>
    <div v-auto-animate class="search_results">
      <div v-for="(img, i) in images" :key="i" class="search_res">
        <img :src="img.url">
        <div class="close" @click="removeImage(i)">
          <Icon icon="vaadin:close" />
        </div>
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
    position: relative;
    width: 32rem;
    height: 24rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.close {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  padding: 0.6rem;
  background-color: $secondary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: $primary-color;
  }

  svg {
    font-size: 1.2rem;
    color: #fff;
  }
}
</style>
