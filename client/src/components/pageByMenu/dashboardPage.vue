<template>
  <div id="dashboardPage">
    <v-card class="d-flex flex-wrap justify-space-between" color="transparent" flat tile>
      <v-card
        v-for="(item,index) in headerTopBlock"
        :key="index"
        elevation="2"
        width="598"
        height="550"
        class="mb-4"
        outlined
        tile
      ></v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "dashboardPage",
  data: () => ({
    // justify: ["start", "end"],
    // value: [300, 446, 675, 510, 590, 610, 760],
    // years: ["30 day", "60 day", "90 day", "180 day", "1 year"],
    // texts: [["Collected", "Total"], ["Expense Total", "Income Total"]],
    headerTopBlock: [
      ["mdi-chart-timeline-variant", "INCOME SUMMARY"],
      ["mdi-clipboard-text-outline", "OUTSTANDING INVOICES"],
      ["mdi-chart-timeline-variant", "EXPENSE SUMMARY"],
      ["mdi-clipboard-text-outline", "OUTSTANDING PAYMENTS"]
    ]
  })
};
</script>