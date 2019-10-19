import Vue from "vue";
import Router from "vue-router";
import loginPage from "@/components/loginPage/loginPage.vue";

import homePage from "@/components/homePage/homePage.vue";
import mainPage from "@/components/pageByMenu/mainPage.vue";
import overviewPage from "@/components/pageByMenu/overviewPage.vue";

import quotationsPage from "@/components/pageByMenu/sellingPage/quotationsPage.vue";
import billingNotePage from "@/components/pageByMenu/sellingPage/billingNotePage.vue";
import receiptPage from "@/components/pageByMenu/sellingPage/receiptPage.vue";

import ordersPage from "@/components/pageByMenu/buyingPage/ordersPage.vue";
import productReceiptPage from "@/components/pageByMenu/buyingPage/productReceiptPage.vue";

import expensePage from "@/components/pageByMenu/expensePage/expensePage.vue";
import withholdingPage from "@/components/pageByMenu/expensePage/withholdingPage.vue";

import paySalaryPage from "@/components/pageByMenu/salaryPage/paySalaryPage.vue";
import employeeListPage from "@/components/pageByMenu/salaryPage/employeeListPage.vue";

import reportPage from "@/components/pageByMenu/reportPage.vue";
import productPage from "@/components/pageByMenu/productPage.vue";
import addressBookPage from "@/components/pageByMenu/addressBookPage.vue";
import settingPage from "@/components/pageByMenu/settingPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "login", component: loginPage },

    {
      path: "/homePage/",
      name: "loged",
      component: homePage,
      meta: { requiresAuth: true },
      children: [
        {
          path: "mainPage",
          component: mainPage
        },
        {
          path: "overviewPage",
          component: overviewPage
        },
        {
          path: "sellingPage/quotationsPage",
          component: quotationsPage
        },
        {
          path: "sellingPage/billingNotePage",
          component: billingNotePage
        },
        {
          path: "sellingPage/receiptPage",
          component: receiptPage
        },
        {
          path: "buyingPage/ordersPage",
          component: ordersPage
        },
        {
          path: "buyingPage/productReceiptPage",
          component: productReceiptPage
        },
        {
          path: "expensePage/expensePage",
          component: expensePage
        },
        {
          path: "expensePage/withholdingPage",
          component: withholdingPage
        },
        {
          path: "salaryPage/paySalaryPage",
          component: paySalaryPage
        },
        {
          path: "salaryPage/employeeListPage",
          component: employeeListPage
        },
        {
          path: "reportPage",
          component: reportPage
        },
        {
          path: "productPage",
          component: productPage
        },
        {
          path: "addressBookPage",
          component: addressBookPage
        },
        {
          path: "settingPage",
          component: settingPage
        }
      ]
    }
  ]
});
