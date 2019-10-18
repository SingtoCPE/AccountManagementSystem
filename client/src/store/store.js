import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueLocalStorage from "vue-localstorage";
import auth from "@/utils/auth.js";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const endpointLogin = "http://localhost:3033/employee/login";

export const store = new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async accountLogin(_, { user, password }) {
      const { data } = await Axios({
        method: "post",
        url: endpointLogin,
        data: {
          user,
          password
        }
      });
      auth.setToken(data.token);
      if (data.token) {
        window.location.href = "http://localhost:8080/#/mainpage";
        alert(data.resTextSuccess + " Welcome " + data.userFormDB.name);
      } else if (data.resTextPassFailed) {
        alert(data.resTextPassFailed);
      } else {
        alert(data.resTextUserFailed);
      }
    }
  }
});
