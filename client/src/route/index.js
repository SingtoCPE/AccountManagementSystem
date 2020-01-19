import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "public",
      component: () => import("@/components/layouts/PublicLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/pages/login/LoginPage.vue")
        }
      ]
    },

    {
      path: "/",
      name: "private",
      component: () => import("@/components/layouts/PrivateLayout.vue"),
      children: [
        {
          path: "mainpage",
          name: "mainpage",
          component: () => import("@/components/layouts/PrivateLayout.vue"),
          meta: { requiresAuth: true },
          children: [
            {
              path: "mainpage",
              name: "mainpage",
              component: () => import("@/pages/mainPage.vue")
            },
            {
              path: "dashboard",
              name: "dashboard",
              component: () => import("@/pages/dashboardPage.vue")
            },
            {
              path: "/sell/invoice",
              name: "invoice",
              component: () => import("@/pages/sell/InvoicePage.vue")
            },
            {
              path: "/sell/billingNote",
              name: "billingNote",
              component: () => import("@/pages/sell/billingNotePage.vue")
            },
            {
              path: "/sell/priceQuotation",
              name: "priceQuotation",
              component: () => import("@/pages/sell/priceQuotationPage.vue")
            },
            {
              path: "/buy/purchaseOrder",
              name: "purchaseOrder",
              component: () => import("@/pages/buy/purchaseOrderPage.vue")
            },
            {
              path: "/buy/receivingInventory",
              name: "receivingInventory",
              component: () => import("@/pages/buy/receivingInventoryPage.vue")
            },
            {
              path: "/expense",
              name: "expense",
              component: () => import("@/pages/expense/expensePage.vue")
            },
            {
              path: "/expense/withholding",
              name: "withholding",
              component: () => import("@/pages/expense/withholdingPage.vue")
            },
            {
              path: "/payroll/employeeList",
              name: "employeeList",
              component: () => import("@/pages/payroll/employeeListPage.vue")
            },
            {
              path: "/payroll/runPayroll",
              name: "runPayroll",
              component: () => import("@/pages/payroll/runPayrollPage.vue")
            }
          ]
        },
        {
          path: "account",
          name: "account",
          component: () => import("@/pages/accountPage.vue"),
          meta: { requiresAuth: true }
        }
      ]
    },

    {
      path: "/homePage/",
      name: "loged",
      component: () => import("@/components/homePage/homePage.vue"),
      meta: { requiresAuth: true },
      children: [
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
        }
      ]
    },

    {
      path: "/homePage/settingPage/",
      name: "setting",
      meta: { requiresAuth: true },
      component: () => import("@/components/pageByMenu/settingPage.vue"),
      children: [
        {
          path: "companyPage",
          component: () => import("@/components/pageBySetting/companyPage.vue")
        },
        {
          path: "logoPage",
          component: () => import("@/components/pageBySetting/logoPage.vue")
        },
        {
          path: "stampPage",
          component: () => import("@/components/pageBySetting/stampPage.vue")
        },
        {
          path: "runNumberPage",
          component: () =>
            import("@/components/pageBySetting/runNumberPage.vue")
        },
        {
          path: "documentTitlePage",
          component: () =>
            import("@/components/pageBySetting/documentTitlePage.vue")
        },
        {
          path: "documentTemplatePage",
          component: () =>
            import("@/components/pageBySetting/documentTemplatePage.vue")
        },
        {
          path: "documentFeaturePage",
          component: () =>
            import("@/components/pageBySetting/documentFeaturePage.vue")
        },
        {
          path: "defaultRemarkPage",
          component: () =>
            import("@/components/pageBySetting/defaultRemarkPage.vue")
        },
        {
          path: "defaultEmailPage",
          component: () =>
            import("@/components/pageBySetting/defaultEmailPage.vue")
        },
        {
          path: "otherSettingsPage",
          component: () =>
            import("@/components/pageBySetting/otherSettingsPage.vue")
        },
        {
          path: "downloadPage",
          component: () => import("@/components/pageBySetting/downloadPage.vue")
        },
        {
          path: "signeturePage",
          component: () =>
            import("@/components/pageBySetting/signeturePage.vue")
        },
        {
          path: "userPage",
          component: () => import("@/components/pageBySetting/userPage.vue")
        }
      ]
    }
  ]
});
