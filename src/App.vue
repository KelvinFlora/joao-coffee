<template>
  <nav>
    <NavBar />
  </nav>
  <RouterView />
  <FooterSite />
</template>

<script>
import { RouterView } from "vue-router";
import FooterSite from "./components/FooterSite.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSite,
    RouterView
  }
};
</script>
<style lang="scss"></style>
