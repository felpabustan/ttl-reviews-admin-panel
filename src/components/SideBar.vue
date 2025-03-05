<template>
  <div class="h-screen w-64 bg-gray-800 text-white p-4 fixed">
    <h2 class="text-lg font-bold mb-4">TTL Admin Panel</h2>
    <nav>
      <RouterLink to="/" class="block p-2 hover:bg-gray-700 rounded">
        🏠 Home
      </RouterLink>
      <RouterLink v-if="authStore.isAuthenticated" to="/api-keys" class="block p-2 hover:bg-gray-700 rounded">
        🔑 API Keys
      </RouterLink>
      <RouterLink v-if="authStore.isAuthenticated" to="/documentation" class="block p-2 hover:bg-gray-700 rounded">
        📚 Documentation
      </RouterLink>
      <RouterLink v-if="!authStore.isAuthenticated" to="/login" class="block p-2 hover:bg-gray-700 rounded">
        🔐 Login
      </RouterLink>
      <button
        v-if="authStore.isAuthenticated"
        @click="authStore.logout"
        class="block w-full text-left p-2 hover:bg-gray-700 rounded"
      >
        🚪 Logout
      </button>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia"; // Import storeToRefs for reactivity

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore); // Make isAuthenticated reactive
const router = useRouter();

// Logout function
const logout = async () => {
  await authStore.logout();
  router.push("/login");
};
</script>
