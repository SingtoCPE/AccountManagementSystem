import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueLocalStorage from "vue-localstorage";
import auth from "@/utils/auth.js";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const endpointLogin = "http://localhost:3000/employee/login";

export const store = new Vuex.Store({
  state: {
    data: [],
    user: ""
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setUserName(state, userName) {
      state.userName = userName;
    }
  },
  actions: {
    async accountLogin({ commit }, { user, password }) {
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
        window.location.href = "http://localhost:8080/#/mainPage";
        alert(data.resTextSuccess + " Welcome " + data.userFormDB.name);
        // eslint-disable-next-line no-console
        console.log(data.userFormDB.name);
        commit("setUserName", data.userFormDB.name);
      } else if (data.resTextPassFailed) {
        alert(data.resTextPassFailed);
      } else {
        alert(data.resTextUserFailed);
      }
    },
    clearToken() {
      window.location.href = "http://localhost:8080/#/login";
      Vue.localStorage.remove("AuthToken");
    }
  }
});
