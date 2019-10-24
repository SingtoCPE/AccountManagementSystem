<template>
  <div id="contactsPage">
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
              <v-icon class="mr-2">mdi-account-circle</v-icon>CONTACTS OVERVIEW
            </h4>
          </v-col>
          <v-card height="40" color="white" outlined class="d-flex justify-end mb-3">
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
                    <th>
                      <v-checkbox></v-checkbox>
                    </th>
                    <th class="text-left" style="width:400px;">Company Name</th>
                    <th class="text-left" style="width:200px;">Contact Person</th>
                    <th class="text-left" style="width:120px;">Mobile</th>
                    <th class="text-left" style="width:150px;">Email</th>
                    <th class="text-left" style="width:120px;">Phone</th>
                    <th class="text-left" style="width:250px;">Contact Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-checkbox></v-checkbox>
                    </td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        label="Company Name"
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        label="Contact Person"
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        label="Mobile"
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        label="Email"
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        flat
                        hide-details
                        label="Phone"
                        solo-inverted
                      ></v-text-field>
                    </td>
                    <td>a</td>
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
  name: "contactsPage",
  data: () => ({
    allList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    page: 1
  })
};
</script>