<template>
  <div class="mainpage">
    <v-col class="ma-5">
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
    </v-col>

    <v-col :class="`d-flex justify-start `" color="light">
      <v-col class="pa-2" cols="12" sm="2">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="ma-auto">
            <v-list>
              <v-list-item link>
                <v-col class="brown lighten-5 pa-3">
                  <v-icon>mdi-home</v-icon>
                </v-col>
                <v-list-item-title class="pl-5">Main</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-col class="brown lighten-5 pa-3">
                  <v-icon>mdi-star</v-icon>
                </v-col>
                <v-list-item-title class="pl-5">Overview</v-list-item-title>
              </v-list-item>

              <v-list-group value="true">
                <template v-slot:activator>
                  <v-col class="brown lighten-5 pa-3">
                    <v-icon>mdi-currency-usd</v-icon>
                  </v-col>
                  <v-list-item-title class="pl-5">Selling</v-list-item-title>
                </template>

                <v-list-item v-for="(sell, i) in selling" :key="i" link>
                  <v-icon class="pl-3">mdi-square-small</v-icon>
                  <v-list-item-title class="pl-10" v-text="sell[0]"></v-list-item-title>
                </v-list-item>
              </v-list-group>

              <v-list-group value="true">
                <template v-slot:activator>
                  <v-col class="brown lighten-5 pa-3">
                    <v-icon>mdi-cart</v-icon>
                  </v-col>
                  <v-list-item-title class="pl-5">Buying</v-list-item-title>
                </template>

                <v-list-item v-for="(buy, i) in buying" :key="i" link>
                  <v-icon class="pl-3">mdi-square-small</v-icon>
                  <v-list-item-title class="pl-10" v-text="buy[0]"></v-list-item-title>
                </v-list-item>
              </v-list-group>

              <v-list-group value="true">
                <template v-slot:activator>
                  <v-col class="brown lighten-5 pa-3">
                    <v-icon>mdi-cash-refund</v-icon>
                  </v-col>
                  <v-list-item-title class="pl-5">Expenses</v-list-item-title>
                </template>

                <v-list-item v-for="(expense, i) in expenses" :key="i" link>
                  <v-icon class="pl-3">mdi-square-small</v-icon>
                  <v-list-item-title class="pl-10" v-text="expense[0]"></v-list-item-title>
                </v-list-item>
              </v-list-group>

              <v-list-group value="true">
                <template v-slot:activator>
                  <v-col class="brown lighten-5 pa-3">
                    <v-icon>mdi-cash-100</v-icon>
                  </v-col>
                  <v-list-item-title class="pl-5">Salary</v-list-item-title>
                </template>

                <v-list-item v-for="(amount, i) in salary" :key="i" link>
                  <v-icon class="pl-3">mdi-square-small</v-icon>
                  <v-list-item-title class="pl-10" v-text="amount[0]"></v-list-item-title>
                </v-list-item>
              </v-list-group>

              <v-list-item link>
                <v-col class="brown lighten-5 pa-3">
                  <v-icon>mdi-clipboard-pulse</v-icon>
                </v-col>
                <v-list-item-title class="pl-5">Report</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-col class="brown lighten-5 pa-3">
                  <v-icon>mdi-package-variant-closed</v-icon>
                </v-col>
                <v-list-item-title class="pl-5">Product</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-col class="brown lighten-5 pa-3">
                  <v-icon>mdi-account-circle</v-icon>
                </v-col>
                <v-list-item-title class="pl-5">Address book</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-col class="brown lighten-5 pa-3">
                  <v-icon>mdi-settings</v-icon>
                </v-col>
                <v-list-item-title class="pl-5">Setting</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-hover>
      </v-col>

      <v-col class="pa-2 ml-1 mb-8">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" height="550" width="auto"></v-card>
        </v-hover>
      </v-col>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "mainpage",
  data: () => ({
    selling: [["Quotations"], ["Billing note"], ["Receipt"]],
    buying: [["Orders"], ["Product receipt"]],
    expenses: [["Expenses"], ["Withholding"]],
    salary: [["Pay salary"], ["Employee list"]],
    justify: ["start", "end"]
  }),
  methods: {}
};
</script>

