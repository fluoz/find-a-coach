<template>
  <div style="width: 800px" class="use-shadow rounded-2xl mt-12">
    <form class="p-5" @submit.prevent="submitForm">
      <h1 class="font-bold text-xl py-3">Register as a coach now!</h1>
      <div class="flex flex-col">
        <label for="name" class="font-semibold py-2">Your Name</label>
        <input
          class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
          id="name"
          type="text"
          v-model="name"
        />
      </div>
      <div class="flex flex-col">
        <label for="message" class="font-semibold py-2">Message</label>
        <textarea
          class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline h-28"
          id="message"
          v-model="message"
        />
      </div>
      <div class="flex flex-col">
        <label for="rate" class="font-semibold py-2">Hourly Rate</label>
        <input
          class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
          id="rate"
          type="number"
          v-model="rate"
        />
      </div>
      <div class="py-3 px-1">
        <h1 class="font-semibold">Areas of Expertise</h1>
        <div class="flex pt-1 items-center">
          <input
            id="frontend"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            value="frontend"
            v-model="selectedExpert"
          />
          <label for="frontend" class="ml-2 text-base font-medium text-gray-900"
            >Frontend Development</label
          >
        </div>
        <div class="flex pt-1 items-center">
          <input
            id="backend"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            v-model="selectedExpert"
            value="backend"
          />
          <label for="backend" class="ml-2 text-base font-medium text-gray-900"
            >Backend Development</label
          >
        </div>
        <div class="flex pt-1 items-center">
          <input
            id="career"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            value="career"
            v-model="selectedExpert"
          />
          <label for="career" class="ml-2 text-base font-medium text-gray-900"
            >Career Advisory</label
          >
        </div>
      </div>
      <p class="text-red-500 mb-2" v-if="empty">
        Please fill in all the input.
      </p>
      <button
        type="submit"
        class="py-2 px-4 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
      >
        Send Message
      </button>
    </form>
    <teleport to="body">
      <dialog-modal :open="open" @close="toFalse">
        <template #head> {{ modalHead }}</template>
        <template #message> {{ error }} </template>
      </dialog-modal>
    </teleport>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCoachStore } from "../../stores/coachsApi";
import DialogModal from "../../components/UI/DialogModal.vue";
import { dialogFunc } from "../../hooks/dialog.js";
import { useRouter } from "vue-router";

const coachStore = useCoachStore();
const selectedExpert = ref([]);
const name = ref(null);
const message = ref(null);
const rate = ref(null);
const empty = ref(false);
const router = useRouter();

const { error, modalHead, open, toFalse } = dialogFunc();

const submitForm = async () => {
  if (
    selectedExpert.value.length === 0 ||
    !name.value ||
    !message.value ||
    !rate.value
  ) {
    empty.value = true;
  } else {
    try {
      const data = {
        name: name.value,
        description: message.value,
        price: rate.value,
        type: selectedExpert.value,
      };
      const coachesData = await coachStore.postCoachData(data);
      router.push({ name: "coaches" });
    } catch (e) {
      console.log(e);
      modalHead.value = "An error occured";
      error.value = "Error when post to firebase";
      open.value = true;
    }
  }
};
</script>
