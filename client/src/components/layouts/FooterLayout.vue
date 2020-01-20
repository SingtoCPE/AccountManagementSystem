<template>
  <div id="FooterLayout">
    <v-footer color="rgba(19,84,122,.5), rgba(128,208,199,.8)" app>
      <v-spacer class="white--text text-center">
        Copyright &copy; 2017 - {{ new Date().getFullYear() }} —
        <strong>The Dollarsign.Co.Ltd</strong>
      </v-spacer>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "FooterLayout"
};
</script>
