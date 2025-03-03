<template>
  <div class="flex container">
    <!-- Sidebar -->
    <NewSideBar />

    <!-- Main Content -->
    <div class="ml-64 p-6 w-full mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<script>
//import Sidebar from "./components/Sidebar.vue";
import NewSideBar from "./components/NewSideBar.vue";

export default {
  components: { 
    // Sidebar,
    NewSideBar
  },
};
</script>
