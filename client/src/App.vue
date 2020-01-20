<template>
  <v-app>
    <router-view></router-view>
    <footer-app />
  </v-app>
</template>

<script>
import { store } from "./store/store";
import footerApp from "@/components/layouts/FooterLayout.vue";
export default {
  name: "App",
  store,
  components: {
    footerApp
  }
};
</script>
