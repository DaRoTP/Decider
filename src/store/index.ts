import { createStore } from "vuex";

export type State = { isAuth: boolean };

export default createStore<State>({
  state: {
    isAuth: false,
  },
  mutations: {
    SET_AUTH(state, payload: boolean) {
      state.isAuth = payload;
    },
  },
  actions: {
    async LOGIN({ commit, dispatch }, payload) {
      return new Promise((res) => {
        commit("SET_AUTH", true);
        setTimeout(() => {
          res({ message: "Logged in" });
          commit("SET_AUTH", true);
          localStorage.setItem("user", payload);
          localStorage.setItem("token", `Bearer ${payload.username}`);
        }, 1000);
      });
    },
    IS_AUTH({ commit, dispatch }) {
      const token = localStorage.getItem("token");
      console.log("isAuth ..... ");
      if (token) return commit("SET_AUTH", true);
      dispatch("LOGOUT");
    },
    LOGOUT({ commit }) {
      commit("SET_AUTH", false);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  modules: {},
});
