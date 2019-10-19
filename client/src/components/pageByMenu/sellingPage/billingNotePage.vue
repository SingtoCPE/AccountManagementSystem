<template>
  <div id="billingNotePage">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        height="550"
        width="auto"
        class="pa-5 d-flex justify-center"
      >
        <h1>This is BillingNote Page</h1>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "billingNotePage"
};
</script>