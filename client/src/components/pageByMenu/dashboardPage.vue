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
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "dashboardPage",
  data: () => ({
    justify: ["start", "end"],
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