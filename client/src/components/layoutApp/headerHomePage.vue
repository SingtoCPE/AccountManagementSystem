<template>
  <div id="headerHomepage">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title>
        <v-icon>mdi-currency-usd</v-icon>The Dollarsign.Co.Ltd
      </v-toolbar-title>

      <v-spacer class="pt-2 text-center headline font-weight-light"
        >Home Page</v-spacer
      >

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>TH</v-btn>
      <v-btn icon>EN</v-btn>

      <v-btn icon>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon @click="menuBar" v-on="on">
              <v-icon>mdi-settings-outline</v-icon>
            </v-btn>
          </template>
          <v-list color="grey lighten-1" width="200">
            <v-list-item @click="gotoAccount" link>
              <v-list-item-title>
                <v-icon class="mr-2">mdi-account</v-icon>Account
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn block @click="logout" color="pink accent-3"
                  >LOGOUT</v-btn
                >
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "headerHomepage",
  data: () => ({
    clickMenuBar: []
  }),
  methods: {
    logout() {
      this.$store.dispatch("clearToken");
    },
    menuBar() {
      this.clickMenuBar = [];
      this.clickMenuBar.push("click");
    },
    gotoAccount() {
      window.location.href = "http://localhost:8080/#/homePage/accountPage";
    }
  }
};
</script>
