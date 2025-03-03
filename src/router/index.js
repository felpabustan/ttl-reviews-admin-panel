import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ApiKeys from "../views/ApiKeys.vue";
import Documentation from "../views/Documentation.vue";
import Front from "../views/Front.vue";
import Login from "../views/Login.vue";

const routes = [
    { path: "/", component: Front },
    { path: "/home", component: Home },
    { path: "/api-keys", component: ApiKeys },
    { path: "/documentation", component: Documentation },
    { path: "/login", component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

//middleware for routes
//router for authenticated user