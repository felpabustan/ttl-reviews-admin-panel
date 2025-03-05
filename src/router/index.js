import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ApiKeys from "../views/ApiKeys.vue";
import Documentation from "../views/Documentation.vue";
import Front from "../views/Front.vue";
import Login from "../views/Login.vue";
import { useAuthStore } from "../stores/authStore"; // Import Pinia store
import Register from "../views/Register.vue";

const routes = [
  { path: "/", component: Front },
  { path: "/get-started", component: Register },
  { path: "/dashboard", component: Home, meta: { requiresAuth: true } },
  { path: "/api-keys", component: ApiKeys, meta: { requiresAuth: true } },
  { path: "/documentation", component: Documentation, meta: { requiresAuth: true } },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// Navigation Guard for Authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login"); // Redirect to login if not authenticated
  } else {
    next();
  }
});

export default router;
