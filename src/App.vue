<template>
  <div id="home">
    <nav-mi-vue></nav-mi-vue>

    <router-view />
    <footer-mi></footer-mi>
    <div class="overlay" :class="{ 'overlay--open': store.isOverlay }"></div>
  </div>
</template>

<script>
import { useHeaderStore } from "./stores/HeaderStore";
export default {
  setup() {
    const store = useHeaderStore();
    return { store };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
