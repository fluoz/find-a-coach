<template>
  <teleport to="body">
    <section>
      <div
        v-if="open"
        class="w-full h-full opacity-30 bg-gray-800 fixed top-0"
      ></div>
      <transition name="dialog">
        <div v-if="open" class="fixed top-5 w-full flex justify-center">
          <div
            class="modal fade outline-none overflow-x-hidden overflow-y-auto max-w-sm w-full"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog relative w-auto pointer-events-none">
              <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
              >
                <div
                  class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
                >
                  <h5
                    class="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalLabel"
                  >
                    <slot name="head"></slot>
                  </h5>
                  <button
                    type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body relative p-4">
                  <slot name="message"></slot>
                </div>
                <div
                  class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
                >
                  <button
                    type="button"
                    class="px-6 py-2.5 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
                    data-bs-dismiss="modal"
                    @click="emit('close')"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </teleport>
</template>
<script setup>
const props = defineProps({
  open: {
    type: Boolean,
  },
});
const emit = defineEmits(["close"]);
</script>
<style scoped>
.dialog-enter-active {
  animation: modal 0.3s ease-out;
}

.dialog-leave-active {
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  0% {
    transform: translateY(-50px) scale(0.7);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>
