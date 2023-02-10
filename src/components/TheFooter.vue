<script setup lang="ts">
</script>

<template>
  <footer>
    <p>Made with ❤️ by Kovsu</p>
  </footer>
</template>

<style lang="scss">
@import "../styles/_variable.scss";

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4rem;
    color: $secondary-color;
  }
}
</style>
