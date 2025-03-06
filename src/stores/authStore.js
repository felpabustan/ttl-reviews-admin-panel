import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" ? true : false,
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

        this.user = response.data.user; 
        this.isAuthenticated = !!this.user; // Ensure it's only true if a user exists

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("isAuthenticated", this.isAuthenticated.toString());

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

        if (response.data) {
          this.user = response.data;
          this.isAuthenticated = true;

          // Save to localStorage
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("isAuthenticated", "true");
        } else {
          throw new Error("No user data");
        }
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
      }
    },
  },
});
