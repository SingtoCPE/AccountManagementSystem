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
          component: () => import("@/pages/HomePage.vue")
        },
        {
          path: "/buy/purchase-order",
          name: "purchase-order",
          component: () => import("@/pages/buy/PurchaseOrderPage.vue")
        },
        {
          path: "/buy/receiving-inventory",
          name: "receiving-inventory",
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
          name: "employee-list",
          component: () => import("@/pages/payroll/EmployeeListPage.vue")
        },
        {
          path: "/payroll/run-payroll",
          name: "run-payroll",
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
          name: "billing-note",
          component: () => import("@/pages/sell/BillingNotePage.vue")
        },
        {
          path: "/sell/price-quotation",
          name: "price-quotation",
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
          name: "company",
          component: () => import("@/pages/setting/CompanyPage.vue")
        },
        {
          path: "logo",
          name: "logo",
          component: () => import("@/pages/setting/LogoPage.vue")
        },
        {
          path: "stamp",
          name: "stamp",
          component: () => import("@/pages/setting/StampPage.vue")
        },
        {
          path: "run-number",
          name: "run-number",
          component: () => import("@/pages/setting/RunNumberPage.vue")
        },
        {
          path: "document-title",
          name: "document-title",
          component: () => import("@/pages/setting/DocumentTitlePage.vue")
        },
        {
          path: "document-template",
          name: "document-template",
          component: () => import("@/pages/setting/DocumentTemplatePage.vue")
        },
        {
          path: "document-feature",
          name: "document-feature",
          component: () => import("@/pages/setting/DocumentFeaturePage.vue")
        },
        {
          path: "default-remark",
          name: "default-remark",
          component: () => import("@/pages/setting/DefaultRemarkPage.vue")
        },
        {
          path: "default-email",
          name: "default-email",
          component: () => import("@/pages/setting/DefaultEmailPage.vue")
        },
        {
          path: "other-settings",
          name: "other-settings",
          component: () => import("@/pages/setting/OtherSettingsPage.vue")
        },
        {
          path: "download",
          name: "download",
          component: () => import("@/pages/setting/DownloadPage.vue")
        },
        {
          path: "signeture",
          name: "signeture",
          component: () => import("@/pages/setting/SigneturePage.vue")
        },
        {
          path: "user",
          name: "user",
          component: () => import("@/pages/setting/UserPage.vue")
        }
      ]
    }
  ]
});
