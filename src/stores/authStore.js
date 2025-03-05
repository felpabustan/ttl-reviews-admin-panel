import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  }),
  actions: {
    async login(email, password) {
      try {
        await axios.get("/sanctum/csrf-cookie", { withCredentials: true });

        const response = await axios.post(
          "/login",
          { email, password },
          { withCredentials: true }
        );

        this.user = response.data.user; // Store user info
        this.isAuthenticated = true;

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isAuthenticated", "true");

        return true; // Success
      } catch (error) {
        console.error("Login failed:", error.response?.data || error);
        return false; // Failure
      }
    },
    async logout() {
      try {
        await axios.post("/logout", {}, { withCredentials: true });
        this.user = null;
        this.isAuthenticated = false;

        // Remove from localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
      } catch (error) {
        console.error("Logout failed:", error.response?.data || error);
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get("api/v1/user", { withCredentials: true });
        this.user = response.data;
        this.isAuthenticated = true;

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("isAuthenticated", "true");
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;

        // Remove from localStorage if fetching fails
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
      }
    },
  },
});
