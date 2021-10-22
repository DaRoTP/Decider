/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
enum viewNames {
  HOME = "Home",
  LOGIN = "Login",
  REGISTER = "Register",
  SETTINGS = "Settings",
  DASHBOARD = "Dashboard",
  CREATE_POLL = "Create Poll",
  CREATE_BINARY_POLL = "Create Binary Poll",
  CREATE_SELECT_POLL = "Create Select Poll",
  CREATE_METER_POLL = "Create Meter Poll",
  POLL_VOTING = "Poll Voting",
  POLL_VOTING_SELECT = "Poll Voting Select",
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
    component: () => import("@/views/CreatePoll/CreatePoll.vue"),
    name: viewNames.CREATE_POLL,
  },
  CreateMeterPoll: {
    component: () => import("@/views/CreatePoll/CreateMeterPoll.vue"),
    name: viewNames.CREATE_METER_POLL,
  },
  CreateSelectPoll: {
    component: () => import("@/views/CreatePoll/CreateSelectPoll.vue"),
    name: viewNames.CREATE_SELECT_POLL,
  },
  CreateBinaryPoll: {
    component: () => import("@/views/CreatePoll/CreateBinaryPoll.vue"),
    name: viewNames.CREATE_BINARY_POLL,
  },
  PollVoting: {
    component: () => import("@/views/PollVoting/PollVoting.vue"),
    name: viewNames.POLL_VOTING,
  },
  PollVotingSelect: {
    component: () => import("@/views/PollVoting/PollVotingSelect.vue"),
    name: viewNames.POLL_VOTING_SELECT,
  },
};

export { views, viewNames };
