/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
enum viewNames {
  HOME = "Home",
  LOGIN = "Login",
  REGISTER = "Register",
  SETTINGS = "Settings",
  DASHBOARD = "Dashboard",
  CREATE_POLL = "Create Poll",
}

const views = {
  Home: {
    component: () => import("@/views/Home.vue"),
    name: viewNames.HOME,
  },
  Login: {
    component: () => import("@/views/Login.vue"),
    name: viewNames.LOGIN,
  },
  Register: {
    component: () => import("@/views/Register.vue"),
    name: viewNames.REGISTER,
  },
  Settings: {
    component: () => import("@/views/Settings.vue"),
    name: viewNames.SETTINGS,
  },
  Dashboard: {
    component: () => import("@/views/Dashboard.vue"),
    name: viewNames.DASHBOARD,
  },
  CreatePoll: {
    component: () => import("@/views/CreatePoll.vue"),
    name: viewNames.CREATE_POLL,
  },
};

export { views, viewNames };
