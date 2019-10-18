import Vue from "vue";
import Router from "vue-router";
import mainpage from "@/components/mainpage.vue";
import overview from "@/components/overview.vue";
import selling from "@/components/selling.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "mainpage", component: mainpage },
    { path: "/overview", name: "overview", component: overview },
    { path: "/selling", name: "selling", component: selling }
    // {
    //   path: "/mainpage",
    //   name: "loged",
    //   component: mainPage,
    //   meta: { requiresAuth: true }
    // },
    // { path: "/add", name: "add", component: addEmployee },
    // { path: "/register", name: "register", component: adminRegister }
  ]
});
