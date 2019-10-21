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
          path: "dashboardPage",
          component: () => import("@/components/pageByMenu/dashboardPage.vue")
        },
        {
          path: "sellPage/priceQuotationPage",
          component: () =>
            import("@/components/pageByMenu/sellPage/priceQuotationPage.vue")
        },
        {
          path: "sellPage/billingNotePage",
          component: () =>
            import("@/components/pageByMenu/sellPage/billingNotePage.vue")
        },
        {
          path: "sellPage/receiptPage",
          component: () =>
            import("@/components/pageByMenu/sellPage/receiptPage.vue")
        },
        {
          path: "buyPage/purchaseOrderPage",
          component: () =>
            import("@/components/pageByMenu/buyPage/purchaseOrderPage.vue")
        },
        {
          path: "buyPage/receivingInventoryPage",
          component: () =>
            import("@/components/pageByMenu/buyPage/receivingInventoryPage.vue")
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
          path: "payrollPage/runPayrollPage",
          component: () =>
            import("@/components/pageByMenu/payrollPage/runPayrollPage.vue")
        },
        {
          path: "payRollPage/employeeListPage",
          component: () =>
            import("@/components/pageByMenu/payrollPage/employeeListPage.vue")
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
          path: "contactsPage",
          component: () => import("@/components/pageByMenu/contactsPage.vue")
        },
        {
          path: "settingPage",
          component: () => import("@/components/pageByMenu/settingPage.vue")
        }
      ]
    }
  ]
});
