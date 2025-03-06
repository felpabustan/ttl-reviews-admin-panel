<template>
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img class="w-16 h-16 mr-2" src="/TTL-logo-dark.webp" alt="logo" />
      </a>
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="register">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input 
                type="text" 
                v-model="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Your full name" 
                required
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input 
                type="email" 
                v-model="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input 
                type="password" 
                v-model="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="••••••••" 
                required
              />
            </div>
            <div>
              <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
              <input 
                type="password" 
                v-model="password_confirmation"
                id="password_confirmation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="••••••••"
                required
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input 
                  id="terms"
                  type="checkbox"
                  v-model="acceptTerms"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500">
                  I accept the 
                  <a class="font-medium text-primary-600 hover:underline cursor-pointer" @click="openTermsModal">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button 
              type="submit" 
              class="w-full text-white bg-purple-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50"
              :disabled="!acceptTerms || loading"
            >
              {{ loading ? "Creating account..." : "Create an account" }}
            </button>
            <p v-if="errorMessage" class="text-sm text-red-500">{{ errorMessage }}</p>
            <p class="text-sm font-light text-gray-500">
              Already have an account?
              <RouterLink to="/login" class="font-medium text-primary-600 hover:underline">Login here</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Terms Modal -->
  <TermsModal ref="termsModal" @accepted="acceptTerms = true" />
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import TermsModal from "../components/TermsModal.vue"; // Import the modal

export default {
  components: { TermsModal },
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const password_confirmation = ref("");
    const acceptTerms = ref(false);
    const loading = ref(false);
    const errorMessage = ref(null);
    const termsModal = ref(null);
    const router = useRouter(); // Initialize Vue Router

    const openTermsModal = () => {
      termsModal.value.openModal();
    };

    const register = async () => {
      if (!acceptTerms.value) {
        errorMessage.value = "You must accept the terms and conditions.";
        return;
      }

      if (password.value !== password_confirmation.value) {
        errorMessage.value = "Passwords do not match.";
        return;
      }

      loading.value = true;
      errorMessage.value = null;

      setTimeout(async () => { // Async function inside setTimeout
        try {
          const response = await axios.post("/api/v1/register", {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
          });

          if (response.data.status) {
            router.push("/login"); // Redirect on success
          }
        } catch (error) {
          errorMessage.value = error.response?.data?.errors
            ? Object.values(error.response.data.errors).flat().join(", ")
            : error.response?.data?.message || "Registration failed.";
        } finally {
          loading.value = false;
        }
      }, 1500);
    };

    return {
      name,
      email,
      password,
      password_confirmation,
      acceptTerms,
      loading,
      errorMessage,
      termsModal,
      openTermsModal,
      register,
    };
  },
};
</script>

