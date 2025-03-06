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
              <div 
                ref="scrollBox"
                class="h-60 overflow-y-auto border p-3 text-sm text-gray-700 text-justify"
                @scroll="checkScroll"
              >
                <h3 class="font-semibold mb-2">1. Introduction</h3>
                <p>
                  By using our platform to submit product reviews, you agree to these terms and conditions. Your reviews help
                  other users make informed decisions, and we are committed to maintaining a fair and transparent review system.
                </p>
                <h3 class="font-semibold mt-3 mb-2">2. User Data Collection</h3>
                <p>
                  When submitting a review, we collect your name, email, and review content. This information is used to verify 
                  authenticity and improve user experience. We do not sell or share your personal data with third parties without consent.
                </p>
                <h3 class="font-semibold mt-3 mb-2">3. Review Guidelines</h3>
                <p>
                  Your reviews should be honest, respectful, and relevant to the product. We do not allow reviews containing 
                  hate speech, offensive language, spam, or misleading information. Violation of these guidelines may lead to 
                  the removal of your review or account suspension.
                </p>
                <h3 class="font-semibold mt-3 mb-2">4. Intellectual Property</h3>
                <p>
                  By submitting a review, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display 
                  your content on our platform. You retain ownership of your review but allow us to use it for promotional purposes.
                </p>
                <h3 class="font-semibold mt-3 mb-2">5. Liability Disclaimer</h3>
                <p>
                  We are not responsible for the accuracy of user reviews. Reviews reflect personal opinions, and we do not endorse 
                  or guarantee any claims made in user-submitted content.
                </p>
                <h3 class="font-semibold mt-3 mb-2">6. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our platform after changes signifies 
                  your acceptance of the updated terms.
                </p>
                <h3 class="font-semibold mt-3 mb-2">7. Contact Information</h3>
                <p>
                  If you have any questions regarding these terms, please contact us at support@example.com.
                </p>
              </div>
              <button
                class="w-full bg-purple-950 text-white mt-4 py-2 rounded disabled:opacity-50"
                :disabled="!scrolledToBottom"
                @click="acceptTerms"
              >
                Accept
              </button>
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
  
  const checkScroll = () => {
    const el = scrollBox.value;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
      scrolledToBottom.value = true;
    }
  };
  
  const openModal = () => {
    isOpen.value = true;
    scrolledToBottom.value = false;
  };
  
  const closeModal = () => {
    isOpen.value = false;
  };
  
  const acceptTerms = () => {
    isOpen.value = false;
    emit("accepted");
  };
  
  defineExpose({ openModal });
  </script>
  
  <style>
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .modal-fade-enter-from, .modal-fade-leave-to {
    opacity: 0;
  }
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
