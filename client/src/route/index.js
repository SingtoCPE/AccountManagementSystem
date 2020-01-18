import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
// KuyTok
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
          children: [
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
            }
          ]
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
          path: "dashboardPage",
          component: () => import("@/components/pageByMenu/dashboardPage.vue")
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
          path: "accountPage",
          component: () => import("@/components/pageByMenu/accountPage.vue")
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
