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
    LOGIN({ commit }, payload) {
      commit("SET_AUTH", true);
      localStorage.setItem("user", payload);
      localStorage.setItem("token", `Bearer ${payload.username}`);
      console.log("loggin in with user ", payload);
    },
    LOGOUT({ commit }) {
      commit("SET_AUTH", false);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  modules: {},
});
