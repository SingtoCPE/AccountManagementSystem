import Vue from "vue";
import App from "./App.vue";
import router from "./route/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

export default router;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
