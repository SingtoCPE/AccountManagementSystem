<template>
  <div id="ReportPage">
    <v-card elevation="2" height="auto" width="auto">
      <v-col class="teal lighten-3">
        <h4><v-icon class="mr-2">mdi-clipboard-pulse</v-icon>REPORTS</h4>
      </v-col>
      <v-tabs class="pa-7">
        <v-tab>Sell</v-tab>
        <v-tab>Buy</v-tab>
        <v-tab>Product</v-tab>

        <v-tab-item>
          <v-card class="d-flex flex-wrap justify-center mt-6 " flat tile>
            <v-card
              v-for="(item, index) in itemInSell"
              :key="index"
              width="335"
              height="215"
              class="pa-2 ma-1"
              outlined
              tile
            >
              <v-card
                class="pa-4 mb-2 text-start"
                height="150"
                outlined
                color="white"
              >
                <h3>{{ item[0] }}</h3>
                <h3>{{ item[1] }}</h3>
              </v-card>
              <v-card flat color="white" class="text-start ml-5">
                <v-btn @click="clickViewAll(index)" color="teal lighten-3"
                  >VIEW REPORT {{ index }}</v-btn
                >
              </v-card>
            </v-card>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card class="d-flex flex-wrap justify-start mt-6" flat tile>
            <v-card
              v-for="(item, index) in itemInBuy"
              :key="index"
              width="335"
              height="215"
              class="pa-2 ma-1"
              outlined
              tile
            >
              <v-card
                class="pa-4 mb-2 text-start"
                height="150"
                outlined
                color="white"
              >
                <h3>{{ item[0] }}</h3>
                <h3>{{ item[1] }}</h3>
              </v-card>
              <v-card flat color="white" class="text-start ml-5">
                <v-btn @click="clickViewAll(index)" color="teal lighten-3"
                  >VIEW REPORT {{ index }}</v-btn
                >
              </v-card>
            </v-card>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card class="d-flex flex-wrap justify-start mt-6" flat tile>
            <v-card width="335" height="215" class="pa-2 ma-1" outlined tile>
              <v-card
                class="pa-4 mb-2 text-start"
                height="150"
                outlined
                color="white"
              >
                <h3>Products</h3>
                <v-card outlined color="white" height="80">
                  <h4>View Sales revenue by product or service.</h4>
                </v-card>
              </v-card>
              <v-card flat color="white" class="text-start ml-5">
                <v-btn @click="crossCheckAllProduct" color="teal lighten-3"
                  >VIEW REPORT</v-btn
                >
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
    justify: ["start", "end"],
    align: ["start", "end"],
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
    crossCheckAllSell(j, index) {
      // eslint-disable-next-line no-console
      console.log(j, index);
      //if(j==start && index = 0){ Do somethings }
    },

    crossCheckAllBuy(index) {
      // eslint-disable-next-line no-console
      console.log(index);
    },
    crossCheckAllProduct() {
      // eslint-disable-next-line no-console
      console.log("product");
    }
  }
};
</script>
