<template>
  <div id="WithholdingPage">
    <v-card
      class="d-flex flex-column justify-space-between"
      elevation="2"
      height="550"
      width="auto"
    >
      <v-card>
        <v-col class="teal lighten-3">
          <h4>
            <v-icon class="mr-2">mdi-file-percent-outline</v-icon>WITHHOLDING
            TAX OVERVIEW
          </h4>
        </v-col>
        <v-card
          height="43"
          color="white"
          outlined
          class="d-flex justify-end mr-2 mt-2"
        >
          <v-btn color="grey lighten-1" width="115">
            <v-icon>mdi-plus</v-icon>New
          </v-btn>
        </v-card>

        <v-card color="grey lighten-3">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr class="grey lighten-3">
                  <th class="text-center" style="width:20px">
                    <v-checkbox></v-checkbox>
                  </th>
                  <th class="text-left" style="width:120px;">Date</th>
                  <th class="text-left" style="width:130px;">WT #</th>
                  <th class="text-left" style="width:400px;">Supplier Name</th>
                  <th class="text-left" style="width:120px;">Tax</th>
                  <th class="text-left" style="width:120px;">Total</th>
                  <th class="text-left" style="width:120px;">Tax withheld</th>
                  <th class="text-left" style="width:160px;">Status</th>
                  <th class="text-left" style="width:120px;">Edit/Print</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-checkbox></v-checkbox>
                  </td>
                  <td>a</td>
                  <td>
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      flat
                      hide-details
                      label="WT #"
                      solo-inverted
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      flat
                      hide-details
                      label="Supplier Name"
                      solo-inverted
                    ></v-text-field>
                  </td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                  <td>e</td>
                  <td>f</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-card>
      <v-footer color="teal lighten-5">
        <h4>Grand Total</h4>
        <v-spacer class="d-flex justify-center">
          <v-card outlined color="transparent" class="mx-5">
            <div class="text-center mt-1">
              <v-pagination
                v-model="page"
                :length="7"
                :total-visible="4"
              ></v-pagination>
            </div>
          </v-card>
          <v-card
            outlined
            color="transparent"
            class="mx-5 d-flex justify-space-around"
          >
            <h4 class="mt-3">row per page :</h4>
            <v-card outlined class="ml-2" width="100" height="50">
              <v-select :items="allList" label="0" solo></v-select>
            </v-card>
          </v-card>
        </v-spacer>
      </v-footer>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "WithholdingPage",
  data: () => ({
    allList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    page: 1
  })
};
</script>
