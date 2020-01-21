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
                    <v-card-title>{{ item[0] }}</v-card-title>
                    <v-card-text class="content-item">{{ item[1] }}</v-card-text>
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
                    <v-card-title>{{ item[0] }}</v-card-title>
                    <v-card-text class="content-item">{{ item[1] }}</v-card-text>
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
          <v-card
            class="d-flex flex-wrap justify-start mt-6"
            flat
          >
            <v-card
              class="pa-2 ma-1"
              height="215"
              outlined
              tile
              width="335"
            >
              <v-card
                class="pa-4 mb-2 text-start"
                color="white"
                height="150"
                outlined
              >
                <h3>Products</h3>
                <v-card
                  color="white"
                  height="80"
                  outlined
                >
                  <h4>View Sales revenue by product or service.</h4>
                </v-card>
              </v-card>
              <v-card
                class="text-start ml-5"
                color="white"
                flat
              >
                <v-btn
                  @click="crossCheckAllProduct"
                  color="teal lighten-3"
                >VIEW REPORT</v-btn>
              </v-card>
            </v-card>
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
      [
        "Sales",
        "Gives you a summary and helps you keep track of your sales for the month."
      ],
      [
        "Clients",
        "Know who your best clients are so that you can focus you time and energy to serve them."
      ],
      ["Price Quotation", "Summarizes and help you keep track of your."],
      [
        "Billing Note",
        "Summarizes and help you keep track of your billing Note/Invoice."
      ],
      [
        "Payment Collection",
        "Display the payment collection details of each invoice."
      ],
      [
        "Receipt Collection",
        "Display the payment collection details of each invoice."
      ]
    ],
    itemInBuy: [
      [
        "Vendor",
        "Helps you understand who your most important suppliers are and how much you are purchasing from them."
      ],
      [
        "Cash Payments",
        "Summarize cash payments from purchase order and receiving inventory documents.."
      ]
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
