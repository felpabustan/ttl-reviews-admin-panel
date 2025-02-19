import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ApiKeysView from "../views/ApiKeysView.vue";
import DocumentationView from "../views/DocumentationView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/api-keys", component: ApiKeysView },
  { path: "/documentation", component: DocumentationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
