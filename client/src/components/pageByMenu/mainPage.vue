<template>
  <div id="mainPage">
    <v-card elevation="2" height="550" width="auto" class="px-4 py-3">
      <v-row justify="center">
        <v-col cols="12" sm="5" class="mb-2 align-center">
          <h2 class="text-center mb-2">WHAT WOULD YOU LIKE TO DO TODAY?</h2>
          <v-progress-linear color="teal lighten-3" rounded value="100"></v-progress-linear>
        </v-col>
      </v-row>
      <v-card class="d-flex flex-wrap justify-center" flat tile>
        <v-card
          v-for="(item,index) in itemInCard"
          :key="index"
          width="286"
          height="215"
          class="pa-2 ma-1"
          outlined
          tile
        >
          <v-card
            @click="clickCard(index)"
            class="pa-4 mb-2 text-center"
            outlined
            color="white"
            link
          >
            <v-icon size="80px">{{ item[0]}}</v-icon>
            <h3>
              <v-icon>mdi-plus</v-icon>
              {{ item[1] }}
            </h3>
          </v-card>
          <v-card flat color="white" class="text-center">
            <v-btn @click="clickViewAll(index)" color="teal lighten-3">View all {{ index }}</v-btn>
          </v-card>
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "mainPage",
  data: () => ({
    justify: ["start", "end"],
    itemInCard: [
      ["mdi-cash-usd", "Create Price Quotation"],
      ["mdi-note", "Create Billing Note"],
      ["mdi-newspaper", "Create Invoice/Receipt"],
      ["mdi-note-text", "Create Purchase Order"],
      ["mdi-cash-refund", "Add Expenses"],
      ["mdi-file-percent-outline", "Create Withholding Tax"],
      ["mdi-account", "Add Contacts"],
      ["mdi-package-variant-closed", "Add Products"]
    ]
  }),
  methods: {
    clickCard(index) {
      // eslint-disable-next-line no-console
      console.log(index);
    },
    clickViewAll(index) {
      // eslint-disable-next-line no-console
      console.log("Viewall : " + index);
    }
  }
};
</script>