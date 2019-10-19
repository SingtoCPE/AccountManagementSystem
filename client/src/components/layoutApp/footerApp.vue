<template>
  <div id="footerApp">
    <v-footer color="blue-grey lighten-2" app>
      <v-spacer class="white--text text-center">
        &copy; 2017 - {{ new Date().getFullYear() }} —
        <strong>The Dollarsign.co.Ltd</strong>
      </v-spacer>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "footerApp"
};
</script>