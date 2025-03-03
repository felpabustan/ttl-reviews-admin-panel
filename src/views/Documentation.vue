<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">📚 API Documentation</h1>
      <p class="mb-6">Explore the available API endpoints for managing reviews.</p>
  
      <div v-for="(endpoint, index) in apiEndpoints" :key="index" class="mb-4 border p-4 rounded-lg shadow-md">
        <button @click="toggle(index)" class="w-full text-left font-semibold text-lg flex justify-between">
          <span>{{ endpoint.title }}</span>
          <span>{{ activeIndex === index ? '▼' : '▶' }}</span>
        </button>
        <div v-show="activeIndex === index" class="mt-2">
          <p class="text-gray-700">{{ endpoint.description }}</p>
          <pre class="bg-gray-900 text-white p-4 rounded-md text-sm overflow-auto mt-2"><code>{{ endpoint.curl }}</code></pre>
  
          <div v-if="endpoint.filters">
            <h3 class="text-lg font-semibold mt-4">Available Filters:</h3>
            <ul class="list-disc ml-6 mt-2 text-gray-700">
              <li v-for="filter in endpoint.filters" :key="filter.param">
                <strong>{{ filter.param }}:</strong> {{ filter.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const activeIndex = ref(null);
  
      const apiEndpoints = [
        {
          title: "🔍 Get All Reviews",
          description: "Fetch all reviews with optional filters.",
          curl: `curl --location 'https://reviews.triedtestedloved.sg/api/v1/reviews' \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'`,
          filters: [
            { param: "review_url", description: "Filter by review URL." },
            { param: "title", description: "Filter by review title." },
            { param: "limit", description: "Limit the number of results." },
            { param: "rating", description: "Filter by rating (1-5)." },
            { param: "post_id", description: "Filter by post ID." },
            { param: "reviewer", description: "Filter by reviewer's name." },
            { param: "page", description: "Specify the page number for pagination." },
            { param: "order_by", description: "Sort results by a specific field (e.g., title, date)." },
            { param: "order_direction", description: "Specify sort direction (asc or desc)." }
          ]
        },
        {
          title: "📖 Get Single Review",
          description: "Retrieve details of a specific review by ID.",
          curl: `curl --location 'https://reviews.triedtestedloved.sg/api/v1/reviews/1' \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'`
        },
        {
          title: "✏️ Update a Review",
          description: "Modify an existing review by sending new details.",
          curl: `curl --location --request PUT 'https://reviews.triedtestedloved.sg/api/v1/reviews/1' \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "title": "Applaude to the product!!!",
    "status": "approved"
  }'`
        },
        {
          title: "🗑️ Delete a Review",
          description: "Remove a review permanently from the system.",
          curl: `curl --location --request DELETE 'https://reviews.triedtestedloved.sg/api/v1/reviews/2782' \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'`
        },
        {
          title: "➕ Create a Review",
          description: "Add a new review with details like product name, rating, and content.",
          curl: `curl --location 'https://reviews.triedtestedloved.sg/api/v1/reviews' \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \\
  --form 'title="Applaude to the product!"' \\
  --form 'product_name="Test Product 3"' \\
  --form 'reviewer="Fel Pabustan"' \\
  --form 'content="Lorem ipsum dolor sit amet..."' \\
  --form 'review_date="7-Jan-2025"' \\
  --form 'rating="5"' \\
  --form 'review_url="https://beautyinsider.sg/establishment/spa-club/"' \\
  --form 'reviewer_avatar_url="https://beautyinsider.sg/wp-content/uploads/2018/02/xvatar-100x100.jpg"'`
        }
      ];
  
      const toggle = (index) => {
        activeIndex.value = activeIndex.value === index ? null : index;
      };
  
      return { apiEndpoints, activeIndex, toggle };
    }
  };
  </script>
  
  <style>
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  </style>
  