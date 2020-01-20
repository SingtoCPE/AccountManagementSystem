<template>
  <div id="HomePage">
    <v-card elevation="2" height="auto" width="auto">
      <v-card-title>
        <h2 class="text-center mx-auto mb-2">
          WHAT WOULD YOU LIKE TO DO TODAY?
        </h2>

        <v-progress-linear
          color="teal lighten-3"
          rounded
          value="100"
        ></v-progress-linear>
      </v-card-title>
      <v-card-text flat tile>
        <v-container>
          <v-row dense>
            <v-col
              cols="12"
              md="3"
              v-for="(item, index) in itemInCard"
              :key="index"
            >
              <v-card outlined>
                <v-card-text>
                  <v-card @click="clickCard(index)" elevation="0">
                    <div class="d-flex flex-wrap justify-center">
                      <v-icon size="60px">{{ item[0] }}</v-icon>
                    </div>

                    <div class="d-flex flex-wrap justify-center subtitle-1">
                      <v-icon>mdi-plus</v-icon>
                      {{ item[1] }}
                    </div>
                  </v-card>
                </v-card-text>

                <v-card-actions class="mb-4 d-flex flex-wrap justify-center">
                  <v-btn @click="clickViewAll(index)" color="teal lighten-3">
                    View all {{ index }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data: () => ({
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
