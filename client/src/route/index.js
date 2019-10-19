import Vue from "vue";
import Router from "vue-router";
import mainPage from "@/components/homePage/mainPage.vue";
import overviewPage from "@/components/pageByMenu/overviewPage.vue";
import sellingPage from "@/components/pageByMenu/sellingPage.vue";
import loginPage from "@/components/loginPage/loginPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "login", component: loginPage },
    { path: "/overview", name: "overview", component: overviewPage },
    { path: "/selling", name: "selling", component: sellingPage },
    {
      path: "/mainpage",
      name: "loged",
      component: mainPage,
      meta: { requiresAuth: true }
    }
  ]
});
