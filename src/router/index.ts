import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/search",
    },
    {
      path: "/search",
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/editor",
      component: () => import("../views/Editor.vue"),
    },
  ],
});
