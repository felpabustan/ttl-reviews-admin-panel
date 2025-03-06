<template>
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <RouterLink to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img class="w-16 h-16 mr-2" src="/TTL-logo-dark.webp" alt="logo">
      </RouterLink>
      <div class="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" v-model="email" name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" id="password" v-model="password" name="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="••••••••" required>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300">
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit"
              class="w-full text-white bg-purple-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500">
              Don’t have an account yet? 
              <RouterLink to="/register" class="font-medium text-blue-600 hover:underline">
                  Register here
              </RouterLink>  
            </p>
          </form>
          <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push("/dashboard");
  }
})
const handleLogin = async () => {
  const success = await authStore.login(email.value, password.value);
  if (success) {
    router.push("/dashboard");
  } else {
    errorMessage.value = "Invalid email or password. Please try again.";
  }
};
</script>
