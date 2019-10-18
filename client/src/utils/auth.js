export default {
  getToken() {
    return localStorage.getItem("AuthToken");
  },
  setToken(token) {
    return localStorage.setItem("AuthToken", token);
  }
};
