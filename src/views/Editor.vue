<script setup lang="ts">
import { onMounted, ref } from "vue";
import ImageEditor from "../components/ImageEditor.vue";
import TheOption from "../components/Option.vue";
import { exportImage } from "../composable/data";

const w = ref(100);
const h = ref(100);
const c = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  w.value = c.value!.getBoundingClientRect().width * 2;
  h.value = c.value!.getBoundingClientRect().height * 2;
});
</script>

<template>
  <div class="editor__container">
    <div ref="c" class="editor__main">
      <ImageEditor :w="w" :h="h" />
    </div>
    <div class="editor__options">
      <TheOption type="width">
        <template #option_name>
          width:
        </template>
      </TheOption>
      <TheOption type="height">
        <template #option_name>
          height:
        </template>
      </TheOption>
      <TheOption type="range">
        <template #option_name>
          zoom:
        </template>
      </TheOption>
      <TheOption type="wait-list">
        <template #option_name>
          wait-list:
        </template>
      </TheOption>
      <div class="buttons">
        <button class="btn">
          Preview
        </button>
        <button class="btn" @click="exportImage()">
          Export
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/_variable.scss";

.editor {
  &__container {
    padding: 5rem 6.4rem;
    display: flex;
    justify-content: space-around;
  }

  &__main {
    position: relative;
    width: 60%;
    height: calc(100vh - 25rem);
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__options {
    width: 35%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
  }
}

.btn {
  border: none;
  outline: none;
  padding: 1rem 2rem;
  min-width: 10em;
  background-color: #531887;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
}

.buttons {
  display: flex;
  gap: 2.4rem;
  align-items: center;
  margin-top: 2.4rem;
}
</style>
