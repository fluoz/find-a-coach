<template>
  <div style="width: 800px" class="use-shadow rounded-2xl mt-12">
    <form class="p-5">
      <h1 class="font-bold text-xl py-3">Register as a coach now!</h1>
      <div class="flex flex-col">
        <label for="name" class="font-semibold py-2">Your Name</label>
        <input
          class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
          id="name"
          type="name"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="message" class="font-semibold py-2">Message</label>
        <textarea
          class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline h-28"
          id="message"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="rate" class="font-semibold py-2">Hourly Rate</label>
        <input
          class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
          id="rate"
          type="rate"
          required
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
            required
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
            required
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
            required
          />
          <label for="career" class="ml-2 text-base font-medium text-gray-900"
            >Career Advisory</label
          >
        </div>
      </div>
      <button
        class="py-2 px-4 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const selectedExpert = ref([]);
watch(selectedExpert, () => {
  console.log(selectedExpert.value);
});
</script>
