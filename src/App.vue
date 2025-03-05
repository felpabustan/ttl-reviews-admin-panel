<template>
  <div class="flex flex-col min-h-screen">
    <!-- Top Navigation Bar -->
    <NavBar />

    <!-- Main Content -->
    <div class="flex-1 container mx-auto p-6 pt-20">
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
