import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { views } from "./views";
const { Home, Login, Register, Settings, Dashboard, CreatePoll, BinaryPoll } =
  views;

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
