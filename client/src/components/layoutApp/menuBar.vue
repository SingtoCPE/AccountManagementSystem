<template>
  <div id="menuBar">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" class="ma-auto">
        <v-list>
          <v-list-item link @click="clickMain">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-home</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Main</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickOverview">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-star</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Overview</v-list-item-title>
          </v-list-item>

          <v-list-group>
            <template v-slot:activator>
              <v-col class="brown lighten-5 pa-3">
                <v-icon>mdi-currency-usd</v-icon>
              </v-col>
              <v-list-item-title class="pl-3">Selling</v-list-item-title>
            </template>

            <v-list-item v-for="(sell, i) in selling" :key="i" @click="sell.i" link>
              <v-icon class="pl-3">mdi-square-small</v-icon>
              <v-list-item-title class="pl-8" v-text="sell[0]"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-col class="brown lighten-5 pa-3">
                <v-icon>mdi-cart</v-icon>
              </v-col>
              <v-list-item-title class="pl-3">Buying</v-list-item-title>
            </template>

            <v-list-item v-for="(buy, i) in buying" :key="i" link>
              <v-icon class="pl-3">mdi-square-small</v-icon>
              <v-list-item-title class="pl-8" v-text="buy[0]"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-col class="brown lighten-5 pa-3">
                <v-icon>mdi-cash-refund</v-icon>
              </v-col>
              <v-list-item-title class="pl-3">Expenses</v-list-item-title>
            </template>

            <v-list-item v-for="(expense, i) in expenses" :key="i" link>
              <v-icon class="pl-3">mdi-square-small</v-icon>
              <v-list-item-title class="pl-8" v-text="expense[0]"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-col class="brown lighten-5 pa-3">
                <v-icon>mdi-cash-100</v-icon>
              </v-col>
              <v-list-item-title class="pl-3">Salary</v-list-item-title>
            </template>

            <v-list-item v-for="(amount, i) in salary" :key="i" link>
              <v-icon class="pl-3">mdi-square-small</v-icon>
              <v-list-item-title class="pl-8" v-text="amount[0]"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item link @click="clickReport">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-clipboard-pulse</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Report</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickProduct">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Product</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickAddressBook">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-account-circle</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Address book</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickSetting">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-settings</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Setting</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "menuBar",
  data: () => ({
    selling: [["Quotations"], ["Billing note"], ["Receipt"]],
    buying: [["Orders"], ["Product receipt"]],
    expenses: [["Expenses"], ["Withholding"]],
    salary: [["Pay salary"], ["Employee list"]],
    justify: ["start", "end"]
  }),
  methods: {
    clickMain() {
      window.location.href = "http://localhost:8080/#/homePage/mainPage";
    },
    clickOverview() {
      window.location.href = "http://localhost:8080/#/homePage/overviewPage";
    },
    clickReport() {
      window.location.href = "http://localhost:8080/#/homePage/reportPage";
    },
    clickProduct() {
      window.location.href = "http://localhost:8080/#/homePage/productPage";
    },
    clickAddressBook() {
      window.location.href = "http://localhost:8080/#/homePage/addressBookPage";
    },
    clickSetting() {
      window.location.href = "http://localhost:8080/#/homePage/settingPage";
    },
    Quotations() {
      window.location.href = "http://localhost:8080/#/homePage/settingPage";
    }
  }
};
</script>