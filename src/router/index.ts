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
    beforeEnter: (to, from, next) => {
      if (store.state.isAuth) return next("/dashboard");
      return next();
    },
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
        meta: { pollType: "BINARY" },
      },
      {
        ...MeterCreatePoll,
        path: "/create-poll/meter",
        meta: { pollType: "METER" },
      },
      {
        ...SelectCreatePoll,
        path: "/create-poll/select",
        meta: { pollType: "SELECT" },
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

router.beforeEach(async (to, from, next) => {
  if (to.meta.hasOwnProperty("auth")) {
    if (to.meta.auth && !store.state.isAuth) {
      return next("/login");
    }
    if (!to.meta.auth && store.state.isAuth) {
      const redirectPath = from.fullPath === "/" ? "/dashboard" : from.fullPath;
      return next(redirectPath);
    }
  }
  next();
});

export default router;
