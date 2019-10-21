<template>
  <div id="menuBar">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" class="ma-auto">
        <v-list>
          <v-list-item link @click="clickMain">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-home</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Home</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickOverview">
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

            <v-list-item v-for="(item, i) in sell" :key="i" @click="clickChildSell(item[0])" link>
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

            <v-list-item v-for="(item, i) in buy" :key="i" @click="clickChildBuy(item[0])" link>
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

            <v-list-item
              v-for="(item, i) in expense"
              :key="i"
              @click="clickChildExpense(item[0])"
              link
            >
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

            <v-list-item
              v-for="(item, i) in payroll"
              :key="i"
              @click="clickChildSalary(item[0])"
              link
            >
              <v-icon class="pl-3">mdi-square-small</v-icon>
              <v-list-item-title class="pl-8" v-text="item[0]"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item link @click="clickReport">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-clipboard-pulse</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Report</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickProduct">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Product</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickContacts">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-account-circle</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Contacts</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="clickSetting">
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-settings</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Setting</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "menuBar",
  data: () => ({
    sell: [["Price Quotation"], ["Billing Note"], ["Invoice/Receipt"]],
    buy: [["Purchase Order"], ["Receiving Inventory"]],
    expense: [["Expense"], ["Withholding Tax"]],
    payroll: [["Run Payroll"], ["Employee List"]],
    justify: ["start", "end"]
  }),
  methods: {
    clickMain() {
      window.location.href = "http://localhost:8080/#/homePage/mainPage";
    },
    clickOverview() {
      window.location.href = "http://localhost:8080/#/homePage/dashboardPage";
    },
    clickReport() {
      window.location.href = "http://localhost:8080/#/homePage/reportPage";
    },
    clickProduct() {
      window.location.href = "http://localhost:8080/#/homePage/productPage";
    },
    clickContacts() {
      window.location.href = "http://localhost:8080/#/homePage/contactsPage";
    },
    clickSetting() {
      window.location.href = "http://localhost:8080/#/homePage/settingPage";
    },

    clickChildSell(nameSell) {
      if (nameSell == "Price Quotation") {
        window.location.href =
          "http://localhost:8080/#/homePage/sellPage/priceQuotationPage";
      }
      if (nameSell == "Billing Note") {
        window.location.href =
          "http://localhost:8080/#/homePage/sellPage/billingNotePage";
      }
      if (nameSell == "Invoice/Receipt") {
        window.location.href =
          "http://localhost:8080/#/homePage/sellPage/receiptPage";
      }
    },
    clickChildBuy(nameBuy) {
      if (nameBuy == "Purchase Order") {
        window.location.href =
          "http://localhost:8080/#/homePage/buyPage/purchaseOrderPage";
      }
      if (nameBuy == "Receiving Inventory") {
        window.location.href =
          "http://localhost:8080/#/homePage/buyPage/receivingInventoryPage";
      }
    },
    clickChildExpense(nameExpense) {
      if (nameExpense == "Expense") {
        window.location.href =
          "http://localhost:8080/#/homePage/expensePage/expensePage";
      }
      if (nameExpense == "Withholding Tax") {
        window.location.href =
          "http://localhost:8080/#/homePage/expensePage/withholdingPage";
      }
    },
    clickChildSalary(namePayroll) {
      if (namePayroll == "Run Payroll") {
        window.location.href =
          "http://localhost:8080/#/homePage/payrollPage/runPayrollPage";
      }
      if (namePayroll == "Employee List") {
        window.location.href =
          "http://localhost:8080/#/homePage/payrollPage/employeeListPage";
      }
    }
  }
};
</script>