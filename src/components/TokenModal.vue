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
            <div v-if="token" class="mb-4">
              <input
                type="password"
                :value="token"
                class="w-full p-2 border border-gray-300 rounded mb-4"
                readonly
              />
              <button @click="copyToken" class="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Copy Token
              </button>
            </div>
            <div class="flex justify-end space-x-2">
              <button @click="cancel" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
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
  token: String
});

const emit = defineEmits(["close"]);

const cancel = () => {
  emit("close");
};

const copyToken = () => {
  navigator.clipboard.writeText(props.token).then(() => {
    alert('Token copied to clipboard');
  });
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