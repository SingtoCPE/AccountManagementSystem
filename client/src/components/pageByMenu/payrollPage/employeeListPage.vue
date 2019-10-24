<template>
  <div id="employeeListPage">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="d-flex flex-column justify-space-between"
        :elevation="hover ? 12 : 2"
        height="550"
        width="auto"
      >
        <v-card>
          <v-col class="teal lighten-3">
            <h4>
              <v-icon class="mr-2">mdi-account-circle</v-icon>EMPLOYEES
            </h4>
          </v-col>
          <v-card height="43" color="white" outlined class="d-flex justify-end mr-2 mt-2">
            <v-btn color="grey lighten-1" width="115">
              <v-icon>mdi-plus</v-icon>New
            </v-btn>
          </v-card>

          <v-card color="grey lighten-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr style="height:70px;" class="grey lighten-3">
                    <th class="text-right" style="width:90px;"></th>
                    <th class="text-left" style="width:130px;">Employee ID</th>
                    <th class="text-left" style="width:350px;">Name</th>
                    <th class="text-left" style="width:130px;">Position</th>
                    <th class="text-left" style="width:130px;">Salary</th>
                    <th class="text-left" style="width:130px;">Net Salary</th>
                    <th class="text-left" style="width:160px;">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>a</td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>d</td>
                    <td>e</td>
                    <td>f</td>
                    <td>g</td>
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
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "employeeListPage",
  data: () => ({
    allList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    page: 1
  })
};
</script>