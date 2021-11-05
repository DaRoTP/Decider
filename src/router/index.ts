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
    meta: { auth: true },
  },
  {
    ...Login,
    path: "/login",
    meta: { auth: false },
  },
  {
    ...Register,
    path: "/register",
    meta: { auth: false },
  },
  {
    ...Settings,
    path: "/settings",
  },
  {
    ...CreatePollContainer,
    path: "/create-poll",
    props: true,
    meta: { auth: true },
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
    meta: { auth: true },
  },
  {
    ...PollResults,
    path: "/poll/:pollId/results",
    props: true,
    meta: { auth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  if (to.meta.auth && !store.state.isAuth) {
    return next("/login");
  }
  next();
});

export default router;
