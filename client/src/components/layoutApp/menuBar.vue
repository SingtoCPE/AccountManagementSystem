<template>
  <div id="menuBar">
    <v-card elevation="2" class="ma-auto">
      <v-list>
        <v-list-item :to="{ path: '/homePage/mainPage'}">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-home</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Home</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ path: '/homePage/dashboardPage'}">
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

          <v-list-item v-for="(item, i) in sell" :key="i" :to="item[1]">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8" v-text="item[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-cart</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Buy</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in buy" :key="i" :to="item[1]">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8" v-text="item[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-cash-refund</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Expense</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in expense" :key="i" :to="item[1]">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8" v-text="item[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-cash-100</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Payroll</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in payroll" :key="i" :to="item[1]">
            <v-icon class="pl-3">mdi-square-small</v-icon>
            <v-list-item-title class="pl-8" v-text="item[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item :to="{ path: '/homePage/reportPage'}">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-clipboard-pulse</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Report</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ path: '/homePage/productPage'}">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-package-variant-closed</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Product</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ path: '/homePage/contactsPage'}">
          <v-col class="brown lighten-5 pa-3">
            <v-icon>mdi-account-circle</v-icon>
          </v-col>
          <v-list-item-title class="pl-3">Contacts</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ path: '/homePage/settingPage'}">
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
  name: "menuBar",
  data: () => ({
    sell: [
      ["Price Quotation", "/homePage/sellPage/priceQuotationPage"],
      ["Billing Note", "/homePage/sellPage/billingNotePage"],
      ["Invoice/Receipt", "/homePage/sellPage/receiptPage"]
    ],
    buy: [
      ["Purchase Order", "/homePage/buyPage/purchaseOrderPage"],
      ["Receiving Inventory", "/homePage/buyPage/receivingInventoryPage"]
    ],
    expense: [
      ["Expense", "/homePage/expensePage/expensePage"],
      ["Withholding Tax", "/homePage/expensePage/withholdingPage"]
    ],
    payroll: [
      ["Run Payroll", "/homePage/payrollPage/runPayrollPage"],
      ["Employee List", "/homePage/payrollPage/employeeListPage"]
    ],
    justify: ["start", "end"]
  })
};
</script>