<script setup lang="ts">
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  position: relative;
  min-height: 100vh;
  font-family: 'Itim', cursive;
  font-size: 1.6rem;
  line-height: 1.6;
}
</style>
