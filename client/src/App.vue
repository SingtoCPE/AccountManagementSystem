<template>
  <v-app>
    <router-view></router-view>
    <v-footer color="blue-grey lighten-2" app>
      <v-spacer class="white--text text-center">&copy; 2019</v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
