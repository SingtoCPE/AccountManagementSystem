<template>
  <div id="mainPage">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" height="550" width="auto" class="px-4 py-3">
        <v-row justify="center">
          <v-col cols="12" sm="5" class="mb-2 align-center">
            <h1 class="text-center mb-2">What are you doing today?</h1>
            <v-progress-linear color="teal lighten-3" rounded value="100"></v-progress-linear>
          </v-col>
        </v-row>

        <v-card v-for="j in justify" :key="j" :class="`d-flex justify-${j}`" height="215" flat tile>
          <v-card
            v-for="(item,index) in itemInTopCard"
            :key="index"
            class="pa-2 mx-1 mb-2 text-center"
            width="287"
            @click="clickChild(j,index)"
            outlined
            tile
          >
            <v-icon
              class="mt-4 mb-2"
              size="80px"
            >{{ (j=='start'? item[0]:itemInBottomCard[index][0]) }}</v-icon>
            <h3>
              <v-icon>mdi-plus</v-icon>
              {{ (j=='start'? item[1]:itemInBottomCard[index][1]) }}
            </h3>
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="text-center mt-5 mx-auto"
                :elevation="hover ? 3 : 0"
                width="150"
                @click="crossCheckAll(j,index)"
                outlined
              >View all {{ (j=='start'? 'top ':'bottom ')+index }}</v-card>
            </v-hover>
          </v-card>
        </v-card>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "mainPage",
  data: () => ({
    justify: ["start", "end"],
    itemInTopCard: [
      ["mdi-cash-usd", "Create Price Quotation"],
      ["mdi-note", "Create Billing Note"],
      ["mdi-newspaper", "Create Invoice/Receipt"],
      ["mdi-note-text", "Create Purchase Order"]
    ],
    itemInBottomCard: [
      ["mdi-cash-refund", "Add Expenses"],
      ["mdi-file-percent-outline", "Create Withholding Tax"],
      ["mdi-account", "Add Contacts"],
      ["mdi-package-variant-closed", "Add Products"]
    ]
  }),
  methods: {
    clickChild(j, index) {
      if (j == "start" && index == 0) {
        // eslint-disable-next-line no-console
        console.log("Top 0");
      }
      if (j == "start" && index == 1) {
        // eslint-disable-next-line no-console
        console.log("Top 1");
      }
      if (j == "start" && index == 2) {
        // eslint-disable-next-line no-console
        console.log("Top 2");
      }
      if (j == "start" && index == 3) {
        // eslint-disable-next-line no-console
        console.log("Top 3");
      }

      if (j == "end" && index == 0) {
        // eslint-disable-next-line no-console
        console.log("bottom 0");
      }
      if (j == "end" && index == 1) {
        // eslint-disable-next-line no-console
        console.log("bottom 1");
      }
      if (j == "end" && index == 2) {
        // eslint-disable-next-line no-console
        console.log("bottom 2");
      }
      if (j == "end" && index == 3) {
        // eslint-disable-next-line no-console
        console.log("bottom 3");
      }
    },
    crossCheckAll(j, index) {
      // eslint-disable-next-line no-console
      console.log(j, index);
      //if(j==start && index = 0){ Do somethings }
    }
  }
};
</script>