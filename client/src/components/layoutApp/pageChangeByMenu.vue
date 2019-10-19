<template>
  <div id="pageChangeByMenu">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" height="550" width="auto" class="d-flex justify-center"></v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "pageChangeByMenu"
};
</script>