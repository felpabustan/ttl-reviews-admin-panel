<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🔑 API Keys</h1>
    <p class="mb-4">Manage your API keys here.</p>

    <div v-if="isLoading" class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">API Key Name</th>
            <th scope="col" class="px-6 py-3">Date Created</th>
            <th scope="col" class="px-6 py-3">Last Used</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 5" :key="n" class="bg-white border-b border-gray-200 animate-pulse">
            <td class="px-6 py-4">
              <div class="h-4 bg-gray-200 rounded"></div>
            </td>
            <td class="px-6 py-4">
              <div class="h-4 bg-gray-200 rounded"></div>
            </td>
            <td class="px-6 py-4">
              <div class="h-4 bg-gray-200 rounded"></div>
            </td>
            <td class="px-6 py-4">
              <div class="h-4 bg-gray-200 rounded"></div>
            </td>
            <td class="px-6 py-4">
              <div class="h-4 bg-gray-200 rounded"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="relative overflow-x-auto" v-else-if="apiKeys.length > 0">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">API Key Name</th>
            <th scope="col" class="px-6 py-3">Date Created</th>
            <th scope="col" class="px-6 py-3">Last Used</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="key in apiKeys" :key="key.id" class="bg-white border-b border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ key.name }}
            </th>
            <td class="px-6 py-4">{{ formatDate(key.created_at) }}</td>
            <td class="px-6 py-4">{{ formatDate(key.last_used_at) }}</td>
            <td class="px-6 py-4">Active</td>
            <td class="flex items-center px-6 py-4">
              <a href="#" @click.prevent="viewToken(key.token)" class="font-medium text-blue-600 hover:underline">View</a>
              <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>No API keys available.</p>

    <TokenModal v-if="showModal" :isOpen="showModal" :title="'API Key Token'" :message="'Here is your API key token:'" :token="selectedToken" @close="showModal = false" />
  </div>
</template>

<script>
import axios from 'axios';
import { formatDate } from '../utils/helpers';
import TokenModal from '../components/TokenModal.vue';

export default {
  components: {
    TokenModal
  },
  data() {
    return {
      apiKeys: [],
      showModal: false,
      selectedToken: '',
      isLoading: true
    };
  },
  created() {
    this.fetchApiKeys();
  },
  methods: {
    async fetchApiKeys() {
      try {
        const response = await axios.get('api/v1/api-keys', { withCredentials: true });
        this.apiKeys = response.data;
      } catch (error) {
        console.error('Error fetching API keys:', error);
      } finally {
        this.isLoading = false;
      } 
    },
    formatDate,
    viewToken(token) {
      this.selectedToken = token;
      this.showModal = true;
    }
  }
};
</script>

<style>
/* Add any additional styling here */
</style>