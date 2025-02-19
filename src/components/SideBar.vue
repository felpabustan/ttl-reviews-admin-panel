<template>
    <div class="h-screen w-64 bg-gray-800 text-white p-4 fixed">
      <h2 class="text-lg font-bold mb-4">TTL Admin Panel</h2>
      <nav>
        <RouterLink to="/" class="block p-2 hover:bg-gray-700 rounded">
            🏠 Home
        </RouterLink>
        <RouterLink to="/api-keys" class="block p-2 hover:bg-gray-700 rounded">
            🔑 API Keys
        </RouterLink>
        <RouterLink to="/documentation" class="block p-2 hover:bg-gray-700 rounded">
            📚 Documentation
        </RouterLink>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  
  <style scoped>
  .router-link-active {
    background-color: #4a5568;
  }
  </style>
  