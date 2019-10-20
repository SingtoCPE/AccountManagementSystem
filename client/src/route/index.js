import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/components/loginPage/loginPage.vue")
    },

    {
      path: "/homePage/",
      name: "loged",
      component: () => import("@/components/homePage/homePage.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "mainPage",
          component: () => import("@/components/pageByMenu/mainPage.vue")
        },
        {
          path: "overviewPage",
          component: () => import("@/components/pageByMenu/overviewPage.vue")
        },
        {
          path: "sellingPage/quotationsPage",
          component: () =>
            import("@/components/pageByMenu/sellingPage/quotationsPage.vue")
        },
        {
          path: "sellingPage/billingNotePage",
          component: () =>
            import("@/components/pageByMenu/sellingPage/billingNotePage.vue")
        },
        {
          path: "sellingPage/receiptPage",
          component: () =>
            import("@/components/pageByMenu/sellingPage/receiptPage.vue")
        },
        {
          path: "buyingPage/ordersPage",
          component: () =>
            import("@/components/pageByMenu/buyingPage/ordersPage.vue")
        },
        {
          path: "buyingPage/productReceiptPage",
          component: () =>
            import("@/components/pageByMenu/buyingPage/productReceiptPage.vue")
        },
        {
          path: "expensePage/expensePage",
          component: () =>
            import("@/components/pageByMenu/expensePage/expensePage.vue")
        },
        {
          path: "expensePage/withholdingPage",
          component: () =>
            import("@/components/pageByMenu/expensePage/withholdingPage.vue")
        },
        {
          path: "salaryPage/paySalaryPage",
          component: () =>
            import("@/components/pageByMenu/salaryPage/paySalaryPage.vue")
        },
        {
          path: "salaryPage/employeeListPage",
          component: () =>
            import("@/components/pageByMenu/salaryPage/employeeListPage.vue")
        },
        {
          path: "reportPage",
          component: () => import("@/components/pageByMenu/reportPage.vue")
        },
        {
          path: "productPage",
          component: () => import("@/components/pageByMenu/productPage.vue")
        },
        {
          path: "addressBookPage",
          component: () => import("@/components/pageByMenu/addressBookPage.vue")
        },
        {
          path: "settingPage",
          component: () => import("@/components/pageByMenu/settingPage.vue")
        }
      ]
    }
  ]
});
