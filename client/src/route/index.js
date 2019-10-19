import Vue from "vue";
import Router from "vue-router";
import loginPage from "@/components/loginPage/loginPage.vue";

import homePage from "@/components/homePage/homePage.vue";
import mainPage from "@/components/pageByMenu/mainPage.vue";
import overviewPage from "@/components/pageByMenu/overviewPage.vue";
import sellingPage from "@/components/pageByMenu/sellingPage/sellingPage.vue";
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
          path: "sellingPage",
          component: sellingPage
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
