<template>
  <div class="mainPage">
    <v-col class="ma-5">
      <header-home-page />
    </v-col>

    <v-col :class="`d-flex justify-start `" color="light">
      <v-col class="pa-2" cols="12" sm="2">
        <menu-bar />
      </v-col>

      <v-col class="pa-2 ml-1 mb-8">
        <page-change-by-menu />
      </v-col>
    </v-col>
  </div>
</template>

<script>
import menuBar from "@/components/layoutApp/menuBar.vue";
import pageChangeByMenu from "@/components/layoutApp/pageChangeByMenu";
import headerHomePage from "@/components/layoutApp/headerHomePage";

export default {
  name: "mainPage",

  components: {
    menuBar,
    pageChangeByMenu,
    headerHomePage
  },
  methods: {}
};
</script>

