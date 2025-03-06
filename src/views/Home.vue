<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">📊 Dashboard</h1>

    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 class="text-lg font-semibold">{{ randomWelcomeMessage }}, {{ userName }}!</h2>
    </div>

    <p class="mb-4">Overview of API Key Activity</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">Total API Keys</h2>
        <BarChart :chart-data="apiKeysData" />
      </div>

      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">API Requests Over Time</h2>
        <LineChart :chart-data="apiRequestsData" />
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref, computed } from "vue";
import { Chart, registerables } from "chart.js";
import { BarChart, LineChart } from "vue-chart-3";
import { useAuthStore } from "../stores/authStore";
import { welcomeMessages } from "../utils/intros"; // Import welcome messages

Chart.register(...registerables);

export default defineComponent({
  components: { BarChart, LineChart },
  setup() {
    const authStore = useAuthStore();
    const userName = ref(authStore.user.name);

    const randomWelcomeMessage = computed(() => {
      return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    });

    const apiKeysData = ref({
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Total API Keys",
          backgroundColor: "#3B82F6",
          borderColor: "#2563EB",
          data: [5, 10, 15, 20],
        },
      ],
    });

    const apiRequestsData = ref({
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Requests",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          data: [120, 180, 240, 300],
          fill: true,
        },
      ],
    });

    return { userName, randomWelcomeMessage, apiKeysData, apiRequestsData };
  },
});
</script>
