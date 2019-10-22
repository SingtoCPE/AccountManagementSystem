<template>
  <div id="reportPage">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" height="620" width="auto">
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
            <v-card
              v-for="j in justify"
              :key="j"
              :class="`d-flex justify-${j}`"
              class="my-5"
              height="215"
              flat
              tile
              width="1155"
            >
              <v-card
                v-for="(item,index) in itemInTopCard"
                :key="index"
                class="pa-4 mx-3"
                width="370"
                @click="clickChild(j,index)"
                outlined
                tile
              >
                <h2 class="mt-4 mb-2">{{ (j=='start'? item[0]:itemInBottomCard[index][0]) }}</h2>
                <h4>{{ (j=='start'? item[1]:itemInBottomCard[index][1]) }}</h4>
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="text-center mt-12"
                    :elevation="hover ? 3 : 0"
                    width="150"
                    @click="crossCheckAll(j,index)"
                    outlined
                  >VIEW REPORT {{ (j=='start'? 'top ':'b ')+index }}</v-card>
                </v-hover>
              </v-card>
            </v-card>
          </v-tab-item>
          <v-tab-item>b</v-tab-item>
          <v-tab-item>c</v-tab-item>
        </v-tabs>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "reportPage",
  data: () => ({
    justify: ["start", "end"],
    align: ["start", "end"],
    itemInTopCard: [
      [
        "Sales",
        "Gives you a summary and helps you keep track of your sales for the month."
      ],
      [
        "Clients",
        "Know who your best clients are so that you can focus you time and energy to serve them."
      ],
      ["Price Quotation", "Summarizes and help you keep track of your."]
    ],
    itemInBottomCard: [
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
    ]
  })
};
</script>