<template>
  <div id="receiptPage">
    <v-card
      class="d-flex flex-column justify-space-between"
      elevation="5"
      height="550"
      width="auto"
    >
      <v-card>
        <v-col class="teal lighten-3">
          <h4>
            <v-icon class="mr-2">mdi-newspaper</v-icon>INVOICE OVERVIEW
          </h4>
        </v-col>
        <v-card outlined class="d-flex justify-space-between">
          <v-card outlined color="white">
            <v-text-field
              append-icon="mdi-magnify"
              class="mx-4"
              flat
              hide-details
              label="Search..."
              solo-inverted
            ></v-text-field>
          </v-card>
          <v-card
            outlined
            color="white"
            width="250"
            class="pt-2 ml-3 mr-1 d-flex justify-space-around"
          >
            <v-menu transition="fade-transition">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">
                  more...
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list color="grey lighten-5" width="250">
                <v-list-item>
                  <v-list-item-title>
                    <v-btn block color="grey lighten-3">Download to excel</v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn color="grey lighten-1" width="115">
              <v-icon>mdi-plus</v-icon>New
            </v-btn>
          </v-card>
        </v-card>

        <v-card color="grey lighten-3">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr class="grey lighten-3">
                  <th class="text-center" style="width:20px">
                    <v-checkbox></v-checkbox>
                  </th>
                  <th class="text-left" style="width:120px;">Name</th>
                  <th class="text-left" style="width:120px;">Date</th>
                  <th class="text-left" style="width:150px;">INV #</th>
                  <th class="text-left" style="width:400px;">Client Name</th>
                  <th class="text-left" style="width:120px;">Total</th>
                  <th class="text-left" style="width:120px;">Duo Date</th>
                  <th class="text-left" style="width:120px;">Collected</th>
                  <th class="text-left" style="width:120px;">Status</th>
                  <th class="text-left" style="width:120px;">Edit/Print</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-checkbox></v-checkbox>
                  </td>
                  <td>a</td>
                  <td>b</td>
                  <td>
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      flat
                      hide-details
                      label="INV #"
                      solo-inverted
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      flat
                      hide-details
                      label="Client Name"
                      solo-inverted
                    ></v-text-field>
                  </td>
                  <td>c</td>
                  <td>d</td>
                  <td>e</td>
                  <td>
                    <v-card outlined class="ml-2" width="100" height="50">
                      <v-select :items="allList" label="All" solo></v-select>
                    </v-card>
                  </td>
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
              <v-pagination v-model="page" :length="7" :total-visible="4"></v-pagination>
            </div>
          </v-card>
          <v-card outlined color="transparent" class="mx-5 d-flex justify-space-around">
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
  name: "receiptPage",
  data: () => ({
    allList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    page: 1
  })
};
</script>