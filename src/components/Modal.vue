<template>
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-center backdrop-blur-sm"
        >
          <Transition name="slide">
            <div 
              v-if="isOpen" 
              class="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-all"
            >
              <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
              <p class="text-gray-600 mb-4">{{ message }}</p>
              <div class="flex justify-end space-x-2">
                <button @click="cancel" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                <button @click="confirm" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Confirm</button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
    isOpen: Boolean,
    title: String,
    message: String,
  });
  
  const emit = defineEmits(["close", "confirm"]);
  
  const cancel = () => {
    emit("close");
  };
  
  const confirm = () => {
    emit("confirm");
  };
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .slide-enter-from {
    transform: translateY(-20px);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
  </style>
