<template>
  <div id="dashboardPage">
    <v-card
      color="grey lighten-5"
      v-for="j in justify"
      :key="j"
      :class="`d-flex justify-${j}`"
      height="550"
      flat
      tile
    >
      <v-card
        v-for="(item,index) in headerTopBlock"
        :key="index"
        class="mr-4 mb-4 text-start"
        width="600"
        tile
      >
        <v-col class="teal lighten-3">
          <v-icon class="pl-1">{{j == 'start'? item[0]:headerBottomBlock[index][0]}}</v-icon>
          {{j == 'start'? item[1]:headerBottomBlock[index][1]}}
        </v-col>

        <v-col v-if="index==0" :class="`d-flex justify-start`">
          <v-card outlined class="ml-2" width="100" height="50">
            <v-select color="pink" :items="years" label="years" solo></v-select>
          </v-card>
          <v-card
            outlined
            color="white"
            class="mx-3 px-2"
            :class="`d-flex justify-start`"
            v-if="j=='start'"
          >
            <v-card outlined color="white" height="30">{{texts[index][0]}}</v-card>
            <v-card outlined color="white" height="30" class="ml-2">{{texts[index][1]}}</v-card>
          </v-card>

          <v-card
            outlined
            color="white"
            class="mx-3 px-2"
            :class="`d-flex justify-start`"
            v-if="j!=='start'"
          >
            <v-card outlined color="white" height="30">{{texts[1][0]}}</v-card>
            <v-card outlined color="white" height="30" class="ml-2">{{texts[1][1]}}</v-card>
          </v-card>
        </v-col>

        <v-col class="text-center" v-if="index==1">
          <v-card outlined color="white" v-if="j=='start'">
            <v-icon size="200px">mdi-cash-usd-outline</v-icon>
            <h3>This area displays the total amount that your clients owe you.</h3>
            <v-card width="250" outlined class="mt-10 mx-auto">Create your first billing note</v-card>
          </v-card>
        </v-col>

        <v-col class="text-center" v-if="index==1">
          <v-card outlined color="white" v-if="j!=='start'">
            <v-icon size="200px">mdi-clipboard-text-outline</v-icon>
            <h3>This area displays the total amount that you owe your clients.</h3>
            <v-card width="250" outlined class="mt-10 mx-auto">Create your first purchase</v-card>
          </v-card>
        </v-col>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "dashboardPage",
  data: () => ({
    justify: ["start", "end"],
    years: ["30 day", "60 day", "90 day", "180 day", "1 year"],
    texts: [["Collected", "Total"], ["Expense Total", "Income Total"]],
    headerTopBlock: [
      ["mdi-chart-timeline-variant", "INCOME SUMMARY"],
      ["mdi-clipboard-text-outline", "OUTSTANDING INVOICES"]
    ],
    headerBottomBlock: [
      ["mdi-chart-timeline-variant", "EXPENSE SUMMARY"],
      ["mdi-clipboard-text-outline", "OUTSTANDING PAYMENTS"]
    ]
  })
};
</script>