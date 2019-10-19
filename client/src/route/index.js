import Vue from "vue";
import Router from "vue-router";
import mainpage from "@/components/homePage/mainpage.vue";
import overview from "@/components/homePage/overview.vue";
import selling from "@/components/homePage/selling.vue";
import loginPage from "@/components/loginPage/loginPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "login", component: loginPage },
    { path: "/overview", name: "overview", component: overview },
    { path: "/selling", name: "selling", component: selling },
    {
      path: "/mainpage",
      name: "loged",
      component: mainpage,
      meta: { requiresAuth: true }
    }
  ]
});
