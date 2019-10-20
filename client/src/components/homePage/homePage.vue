<template>
  <div class="homePage">
    <v-col class="ma-5">
      <header-home-page />
    </v-col>

    <v-col class="pt-4 pl-5 pb-0 ma-0">
      <h5>Welcome | todo list</h5>
    </v-col>

    <v-col :class="`d-flex justify-start `" color="light">
      <v-col class="px-2 pt-0" cols="12" sm="2">
        <menu-bar />
      </v-col>

      <v-col class="px-2 pt-0 ml-1 mb-8">
        <router-view></router-view>
      </v-col>
    </v-col>
  </div>
</template>

<script>
import menuBar from "@/components/layoutApp/menuBar.vue";
import headerHomePage from "@/components/layoutApp/headerHomePage";
import { mapState } from "vuex";

export default {
  name: "homePage",
  data() {
    return {
      account: {
        user: ""
      }
    };
  },
  components: {
    menuBar,
    headerHomePage
  },
  computed: mapState({
    data: state => state.data
  })
};
</script>

