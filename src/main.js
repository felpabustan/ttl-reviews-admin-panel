import { createApp } from "vue";
import { createPinia } from "pinia";
import { useAuthStore } from "./stores/authStore";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);  
app.use(router);

const authStore = useAuthStore();  
authStore.fetchUser();

app.mount("#app");
