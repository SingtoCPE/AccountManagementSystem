<template>
  <div id="ReportPage">
    <v-card
      elevation="2"
      height="auto"
      width="auto"
    >
      <v-col class="teal lighten-3">
        <h4>
          <v-icon class="mr-2">mdi-clipboard-pulse</v-icon>REPORTS
        </h4>
      </v-col>
      <v-tabs class="pa-7">
        <v-tab>Sell</v-tab>
        <v-tab>Buy</v-tab>
        <v-tab>Product</v-tab>

        <v-tab-item>
          <v-card elevation="0">
            <v-container>
              <v-row>
                <v-col
                  :key="index"
                  cols="12"
                  md="3"
                  v-for="(item, index) in itemInSell"
                >
                  <v-card
                    height="225"
                    outlined
                  >
                    <v-card-title>{{ item.name }}</v-card-title>
                    <v-card-text class="content-item">{{ item.text }}</v-card-text>
                    <v-card-actions class="d-flex flex-wrap align-end">
                      <v-btn
                        @click="clickViewAll(index)"
                        color="teal lighten-3"
                      >VIEW REPORT {{ index }}</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card elevation="0">
            <v-container>
              <v-row>
                <v-col
                  :key="index"
                  cols="12"
                  md="3"
                  v-for="(item, index) in itemInBuy"
                >
                  <v-card
                    height="225"
                    outlined
                  >
                    <v-card-title>{{ item.name }}</v-card-title>
                    <v-card-text class="content-item">{{ item.text }}</v-card-text>
                    <v-card-actions class="d-flex flex-wrap align-end">
                      <v-btn
                        @click="clickViewAll(index)"
                        color="teal lighten-3"
                      >VIEW REPORT {{ index }}</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card elevation="0">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-card
                    height="225"
                    outlined
                  >
                    <v-card-title>Products</v-card-title>
                    <v-card-text class="content-item">View Sales revenue by product or service.</v-card-text>

                    <v-card-actions class="d-flex flex-wrap align-end">
                      <v-btn
                        @click="crossCheckAllProduct"
                        color="teal lighten-3"
                      >VIEW REPORT</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ReportPage",
  data: () => ({
    itemInSell: [
      {
        name: "Sales",
        text: "Gives you a summary and helps you keep track of your sales for the month."
      },
      {
        name: "Clients",
        text: "Know who your best clients are so that you can focus you time and energy to serve them."
      },
      { name: "Price Quotation", text: "Summarizes and help you keep track of your." },
      {
        name: "Billing Note",
        text: "Summarizes and help you keep track of your billing Note/Invoice."
      },
      {
        name: "Payment Collection",
        text: "Display the payment collection details of each invoice."
      },
      {
        name: "Receipt Collection",
        text: "Display the payment collection details of each invoice."
      }
    ],
    itemInBuy: [
      {
        name: "Vendor",
        text: "Helps you understand who your most important suppliers are and how much you are purchasing from them."
      },
      {
        name: "Cash Payments",
        text: "Summarize cash payments from purchase order and receiving inventory documents.."
      }
    ]
  }),
  methods: {
    crossCheckAllSell(index) {
      // eslint-disable-next-line no-console
      console.log(index);
      //if(j==start && index = 0){ Do somethings }
    },

    crossCheckAllBuy(index) {
      // eslint-disable-next-line no-console
      console.log(index);
    },
    crossCheckAllProduct() {
      // eslint-disable-next-line no-console
      console.log("product");
    },
    clickViewAll(index) {
      // eslint-disable-next-line no-console
      console.log(index);
    }
  }
};
</script>
<style scoped>
.content-item {
  height: 95px;
}
</style>
