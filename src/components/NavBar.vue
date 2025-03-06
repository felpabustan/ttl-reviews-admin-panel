<template>
    <nav class="bg-purple-900 text-white px-4 py-3 shadow-md fixed w-full top-0">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <RouterLink to="/" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
              <img class="w-8 h-8" src="/TTL-logo-dark.webp" alt="TTL Logo" />
              <span class="text-xl font-semibold">Tried, Tested & Loved Reviews</span>
          </RouterLink>
        </div>
  
        <!-- Navigation Links -->
        <div class="flex space-x-4">
          <!-- <RouterLink v-if="!isAuthenticated" to="/" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
            <HomeIcon class="w-5 h-5 mr-1" /> Home
          </RouterLink> -->
  
          <RouterLink v-if="isAuthenticated" to="/dashboard" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
            <ChartBarIcon class="w-5 h-5 mr-1" /> Dashboard
          </RouterLink>
  
          <RouterLink v-if="isAuthenticated" to="/api-keys" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
            <KeyIcon class="w-5 h-5 mr-1" /> API Keys
          </RouterLink>
  
          <RouterLink v-if="isAuthenticated" to="/documentation" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
            <BookOpenIcon class="w-5 h-5 mr-1" /> Documentation
          </RouterLink>
  
          <RouterLink v-if="!isAuthenticated" to="/login" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
            <LockClosedIcon class="w-5 h-5 mr-1" /> Login
          </RouterLink>
  
          <button v-if="isAuthenticated" @click="showModal = true" class="flex items-center hover:bg-gray-700 px-3 py-2 rounded">
            <ArrowRightOnRectangleIcon class="w-5 h-5 mr-1" /> Logout
          </button>
        </div>
      </div>
    </nav>
  
    <!-- Logout Confirmation Modal -->
    <Modal 
      :isOpen="showModal" 
      title="Confirm Logout" 
      message="Are you sure you want to log out?"
      @close="showModal = false"
      @confirm="handleLogout"
    />
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "../stores/authStore";
  import { useRouter } from "vue-router";
  import { storeToRefs } from "pinia";
  import Modal from "../components/Modal.vue";
  
  import { 
    HomeIcon, 
    ChartBarIcon, 
    KeyIcon, 
    BookOpenIcon, 
    LockClosedIcon, 
    ArrowRightOnRectangleIcon 
  } from "@heroicons/vue/24/solid";
  
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);
  const router = useRouter();
  
  const showModal = ref(false);
  
  const handleLogout = async () => {
    await authStore.logout();
    showModal.value = false;
    router.push("/login");
  };
  </script>
  