<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header>
    <div class="logo">
      <img src="../logo/img-editor.png" alt="img editor">
    </div>
    <div class="go">
      <router-link v-if="route.path === '/search'" to="/editor">
        Editor
      </router-link>
      <router-link v-else to="/">
        Home
      </router-link>
    </div>
  </header>
</template>

<style lang="scss">
header {
  width: 100%;
  height: 8rem;
  padding: 6px 6.4rem;
  border-bottom: 1px solid #c3acd02d;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    img {
      height: 50px;
    }
  }

  .go {
    a {
      color: #fff;
      text-decoration: none;
      padding: 1rem 2rem;
      background-color: #531887;
      border-radius: 5px;
    }
  }
}
</style>
