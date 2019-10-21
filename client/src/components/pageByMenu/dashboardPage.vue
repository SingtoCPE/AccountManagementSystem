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
        class="pa-2 mr-4 mb-4 text-center"
        width="600"
        tile
      >
        <v-icon>{{j == 'start'? item[0]:headerBottomBlock[0][0]}}</v-icon>
        {{j == 'start'? item[1]:headerBottomBlock[0][1]}}
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
      ["mdi-mouse", "INCOME SUMMARY"],
      ["mdi-mouse", "OUTSTANDING INVOICES"]
    ],
    headerBottomBlock: [["mdi-mouse", "bottom1"], ["mdi-mouse", "bottom2"]]
  })
};
</script>