import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/TodoList.vue"),
  },
  {
    path: "/auth",
    component: () => import("../views/auth/Index.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "signup",
        name: "sign-up",
        component: () => import("../views/auth/SignUp.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
