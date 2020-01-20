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
      meta: { requiresAuth: true },
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/pages/MainPage.vue")
        },
        {
          path: "/buy/purchase-order",
          name: "purchaseOrder",
          component: () => import("@/pages/buy/PurchaseOrderPage.vue")
        },
        {
          path: "/buy/receiving-inventory",
          name: "receivingInventory",
          component: () => import("@/pages/buy/ReceivingInventoryPage.vue")
        },
        {
          path: "/expense",
          name: "expense",
          component: () => import("@/pages/expense/ExpensePage.vue")
        },
        {
          path: "/expense/withholding",
          name: "withholding",
          component: () => import("@/pages/expense/WithholdingPage.vue")
        },
        {
          path: "/payroll/employee-list",
          name: "employeeList",
          component: () => import("@/pages/payroll/EmployeeListPage.vue")
        },
        {
          path: "/payroll/run-payroll",
          name: "runPayroll",
          component: () => import("@/pages/payroll/RunPayrollPage.vue")
        },
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/pages/DashboardPage.vue")
        },

        {
          path: "/sell/invoice",
          name: "invoice",
          component: () => import("@/pages/sell/InvoicePage.vue")
        },
        {
          path: "/sell/billing-note",
          name: "billingNote",
          component: () => import("@/pages/sell/BillingNotePage.vue")
        },
        {
          path: "/sell/price-quotation",
          name: "priceQuotation",
          component: () => import("@/pages/sell/PriceQuotationPage.vue")
        },
        {
          path: "account",
          name: "account",
          component: () => import("@/pages/AccountPage.vue")
        },
        {
          path: "report",
          name: "report",
          component: () => import("@/pages/ReportPage.vue")
        },
        {
          path: "product",
          name: "product",
          component: () => import("@/pages/ProductPage.vue")
        },
        {
          path: "contacts",
          name: "contacts",
          component: () => import("@/pages/ContactsPage.vue")
        }
      ]
    },

    {
      path: "/setting/",
      name: "setting",
      meta: { requiresAuth: true },
      component: () => import("@/pages/SettingPage.vue"),
      children: [
        {
          path: "company",
          component: () => import("@/components/pageBySetting/companyPage.vue")
        },
        {
          path: "logo",
          component: () => import("@/components/pageBySetting/logoPage.vue")
        },
        {
          path: "stamp",
          component: () => import("@/components/pageBySetting/stampPage.vue")
        },
        {
          path: "run-number",
          component: () =>
            import("@/components/pageBySetting/runNumberPage.vue")
        },
        {
          path: "document-title",
          component: () =>
            import("@/components/pageBySetting/documentTitlePage.vue")
        },
        {
          path: "document-template",
          component: () =>
            import("@/components/pageBySetting/documentTemplatePage.vue")
        },
        {
          path: "document-feature",
          component: () =>
            import("@/components/pageBySetting/documentFeaturePage.vue")
        },
        {
          path: "default-remark",
          component: () =>
            import("@/components/pageBySetting/defaultRemarkPage.vue")
        },
        {
          path: "default-email",
          component: () =>
            import("@/components/pageBySetting/defaultEmailPage.vue")
        },
        {
          path: "other-settings",
          component: () =>
            import("@/components/pageBySetting/otherSettingsPage.vue")
        },
        {
          path: "download",
          component: () => import("@/components/pageBySetting/downloadPage.vue")
        },
        {
          path: "signeture",
          component: () =>
            import("@/components/pageBySetting/signeturePage.vue")
        },
        {
          path: "user",
          component: () => import("@/components/pageBySetting/userPage.vue")
        }
      ]
    }
  ]
});
