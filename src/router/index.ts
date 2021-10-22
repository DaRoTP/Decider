import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { views } from "./views";
import { PollType } from "@/types";

const {
  Home,
  Login,
  Register,
  Settings,
  Dashboard,
  CreatePoll,
  CreateBinaryPoll,
  CreateMeterPoll,
  CreateSelectPoll,
  BinaryPoll,
} = views;

const routes: Array<RouteRecordRaw> = [
  {
    ...Home,
    path: "/",
  },
  {
    ...Dashboard,
    path: "/",
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
    ...CreatePoll,
    path: "/create-poll",
    props: true,
    children: [
      {
        ...CreateBinaryPoll,
        path: "/create-poll/binary",
      },
      {
        ...CreateMeterPoll,
        path: "/create-poll/meter",
      },
      {
        ...CreateSelectPoll,
        path: "/create-poll/select",
      },
    ],
  },
  {
    ...BinaryPoll,
    path: "/poll/:pollId",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
