import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "./components/Home.vue";
import Blogs from "./components/Blogs.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/blogs", name: "Blogs", component: Blogs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
