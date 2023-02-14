<script setup lang="ts">
import TheOption from "../components/Option.vue";
</script>

<template>
  <div class="editor__container">
    <div class="editor__main">
      <canvas />
    </div>
    <div class="editor__options">
      <TheOption type="text">
        <template #option_name>
          width:
        </template>
      </TheOption>
      <TheOption type="text">
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
        <button class="btn">
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
    width: 60%;
    height: calc(100vh - 25rem);

    canvas {
      width: 100%;
      height: 100%;
      border: 1px solid #000;
    }
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
