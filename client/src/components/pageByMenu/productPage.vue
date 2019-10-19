<template>
  <div id="productPage">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        height="550"
        width="auto"
        class="pa-5 d-flex justify-center"
      >
        <h1>This is Product Page</h1>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "productPage"
};
</script>