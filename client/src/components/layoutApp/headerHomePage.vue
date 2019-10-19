<template>
  <div id="headerHomepage">
    <v-app-bar absolute color="#fcb69f" dark src="https://picsum.photos/1920/1080?random">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>

      <v-toolbar-title>
        <v-icon>mdi-currency-usd</v-icon>The Dollarsign.co.Ltd
      </v-toolbar-title>

      <v-spacer class="pt-2 text-center headline font-weight-light">Home Page</v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>TH</v-btn>
      <v-btn icon>EN</v-btn>

      <v-btn icon>
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "headerHomepage"
};
</script>