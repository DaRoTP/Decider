/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Views } from "./viewNames";

const MainViews = {
  Home: {
    component: () => import("@/views/Home.vue"),
    name: Views.MAIN.HOME,
  },
  Login: {
    component: () => import("@/views/Login.vue"),
    name: Views.MAIN.LOGIN,
  },
  Register: {
    component: () => import("@/views/Register.vue"),
    name: Views.MAIN.REGISTER,
  },
  Settings: {
    component: () => import("@/views/Settings.vue"),
    name: Views.MAIN.SETTINGS,
  },
  Dashboard: {
    component: () => import("@/views/Dashboard.vue"),
    name: Views.MAIN.DASHBOARD,
  },
};

const CreatePollViews = {
  CreatePollContainer: {
    component: () => import("@/views/CreatePollContainer.vue"),
    name: Views.CREATE_POLL.CONTAINER,
  },
  MeterCreatePoll: {
    component: () => import("@/views/MeterPoll/MeterPollCreate.vue"),
    name: Views.CREATE_POLL.METER,
  },
  SelectCreatePoll: {
    component: () => import("@/views/SelectPoll/SelectPollCreate.vue"),
    name: Views.CREATE_POLL.SELECT,
  },
  BinaryCreatePoll: {
    component: () => import("@/views/BinaryPoll/BinaryPollCreate.vue"),
    name: Views.CREATE_POLL.BINARY,
  },
};

const VotingPanelViews = {
  VotingPanelContainer: {
    component: () => import("@/views/PollVoting/VotingPanelContainer.vue"),
    name: Views.VOTING_PANNEL.CONTAINER,
  },
  PollResults: {
    component: () => import("@/views/PollVoting/PollResults.vue"),
    name: Views.VOTING_PANNEL.RESULTS,
  },
};

export default {
  ...MainViews,
  ...CreatePollViews,
  ...VotingPanelViews,
};
