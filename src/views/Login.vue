<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">🔑 Login</h1>
      <p class="mb-4">Login to your account.</p>
  
      <div class="relative overflow-x-auto">
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" v-model="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div class="mb-4">
                    <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
            console.log("Requesting CSRF cookie...");
            const csrfResponse = await axios.get('/sanctum/csrf-cookie', {
                withCredentials: true
            });

            console.log("CSRF Cookie Response:", csrfResponse);

            const loginResponse = await axios.post('/login', {
                email: this.email,
                password: this.password
            }, {
                withCredentials: true
            });

            console.log("Login Response:", loginResponse.data);
            } catch (error) {
            console.error("Error logging in:", error.response?.data || error);
            }
        }
    }
};
</script>