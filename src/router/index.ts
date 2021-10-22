import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { views } from "./views";
import { PollType } from "@/types";

const { Home, Login, Register, Settings, Dashboard, CreatePoll, BinaryPoll } = views;

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    ...Home,
  },
  {
    path: "/",
    ...Dashboard,
  },
  {
    path: "/login",
    ...Login,
  },
  {
    path: "/register",
    ...Register,
  },
  {
    path: "/settings",
    ...Settings,
  },
  {
    path: "/create-poll",
    props: true,
    beforeEnter: (to, _, next) => {
      const { type } = to.params;
      if ((type as string) in PollType) {
        return next();
      }
      next("/dashboard");
    },
    ...CreatePoll,
  },
  {
    path: "/poll/:pollId",
    props: true,
    ...BinaryPoll,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
