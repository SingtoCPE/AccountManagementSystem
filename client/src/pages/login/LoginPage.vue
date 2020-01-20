<template>
  <v-container class="blue-grey lighten-5 fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar
              class="d-flex justify-center"
              color="teal lighten-1"
              dark
              flat
            >
              <v-toolbar-title class="font-weight-bold"
                >Account Login</v-toolbar-title
              >
            </v-toolbar>

            <v-card-text class="white">
              <v-form class="mt-3">
                <v-text-field
                  v-model="account.user"
                  class="pa-3"
                  label="Login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                ></v-text-field>

                <v-text-field
                  v-model="account.password"
                  class="pa-3"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                large
                x-large
                block
                class="white--text"
                color="teal lighten-1"
                @click="accountLogin"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      account: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    accountLogin() {
      this.$store.dispatch("accountLogin", {
        user: this.account.user,
        password: this.account.password
      });
    }
  }
};
</script>
