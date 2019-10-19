<template>
  <div id="settingPage">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" height="550" width="auto" class="d-flex justify-center">
        <h1>This is Setting Page</h1>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "settingPage"
};
</script>