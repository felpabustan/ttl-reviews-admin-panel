<template>
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Transition name="modal-slide">
            <div 
              v-if="isOpen" 
              class="bg-white w-[80%] max-w-3xl p-6 rounded-lg shadow-lg relative transform transition-all"
            >
              <h2 class="text-lg font-semibold mb-4">Terms and Conditions</h2>
  
              <!-- Scrollable Content -->
              <div 
                ref="scrollBox"
                class="h-60 overflow-y-auto border p-3 text-sm text-gray-700"
                @scroll="checkScroll"
              >
                <p v-for="n in 50" :key="n">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
  
              <!-- Accept Button -->
              <button
                class="w-full bg-purple-950 text-white mt-4 py-2 rounded disabled:opacity-50"
                :disabled="!scrolledToBottom"
                @click="acceptTerms"
              >
                Accept
              </button>
  
              <!-- Close Button -->
              <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-black">&times;</button>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
  import { ref, defineEmits } from "vue";
  
  const isOpen = ref(false);
  const scrolledToBottom = ref(false);
  const scrollBox = ref(null);
  const emit = defineEmits(["accepted"]);
  
  // Check if user scrolled to the bottom
  const checkScroll = () => {
    const el = scrollBox.value;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
      scrolledToBottom.value = true;
    }
  };
  
  // Open modal
  const openModal = () => {
    isOpen.value = true;
    scrolledToBottom.value = false;
  };
  
  // Close modal
  const closeModal = () => {
    isOpen.value = false;
  };
  
  // Accept terms and close modal
  const acceptTerms = () => {
    isOpen.value = false;
    emit("accepted"); // Emit event to parent
  };
  
  defineExpose({ openModal }); // Allows parent component to trigger this modal
  </script>
  
  <style>
  /* Fade Animation */
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .modal-fade-enter-from, .modal-fade-leave-to {
    opacity: 0;
  }
  
  /* Slide Animation */
  .modal-slide-enter-active, .modal-slide-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .modal-slide-enter-from {
    transform: translateY(-30px);
    opacity: 0;
  }
  .modal-slide-leave-to {
    transform: translateY(30px);
    opacity: 0;
  }
  </style>
  