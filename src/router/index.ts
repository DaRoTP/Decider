import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import views from "./views";
import store from "@/store";

const {
  Home,
  Login,
  Register,
  Settings,
  Dashboard,
  CreatePollContainer,
  BinaryCreatePoll,
  MeterCreatePoll,
  SelectCreatePoll,
  VotingPanelContainer,
  PollResults,
} = views;

const routes: Array<RouteRecordRaw> = [
  {
    ...Home,
    path: "/",
  },
  {
    ...Dashboard,
    path: "/dashboard",
  },
  {
    ...Login,
    path: "/login",
  },
  {
    ...Register,
    path: "/register",
  },
  {
    ...Settings,
    path: "/settings",
  },
  {
    ...CreatePollContainer,
    path: "/create-poll",
    props: true,
    children: [
      {
        ...BinaryCreatePoll,
        path: "/create-poll/binary",
      },
      {
        ...MeterCreatePoll,
        path: "/create-poll/meter",
      },
      {
        ...SelectCreatePoll,
        path: "/create-poll/select",
      },
    ],
  },
  {
    ...VotingPanelContainer,
    path: "/poll/:pollId",
    props: true,
  },
  {
    ...PollResults,
    path: "/poll/:pollId/results",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
