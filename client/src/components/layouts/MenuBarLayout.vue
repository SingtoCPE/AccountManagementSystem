<template>
  <div id="MenuBarLayout">
    <v-card elevation="2" class="ma-auto">
      <v-list>
        <v-list-item :to="{ name: 'home' }">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-home</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Home</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'dashboard' }">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-star</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-currency-usd</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Sell</v-list-item-title>
          </template>

          <v-list-item :to="{ name: 'priceQuotation' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Price Quotation</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'billingNote' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Billing Note</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'invoice' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Invoice/Receipt</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-cart</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Buy</v-list-item-title>
          </template>

          <v-list-item :to="{ name: 'purchaseOrder' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Purchase Order</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'receivingInventory' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8"
              >Receiving Inventory</v-list-item-title
            >
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-cash-refund</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Expense</v-list-item-title>
          </template>

          <v-list-item :to="{ name: 'expense' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Expense</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'withholding' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Withholding Tax</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-cash-100</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Payroll</v-list-item-title>
          </template>

          <v-list-item :to="{ name: 'runPayroll' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Run Payroll</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'employeeList' }">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8">Employee List</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item :to="{ name: 'report' }">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-clipboard-pulse</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Report</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'product' }">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-package-variant-closed</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Product</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'contacts' }">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-account-circle</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Contacts</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'setting' }">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-settings</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Setting</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MenuBarLayout"
};
</script>
