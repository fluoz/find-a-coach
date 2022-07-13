<template>
  <section>
    <div class="container border-2 border-slate-300 rounded-md mt-4 mb-8">
      <div class="py-3 px-3">
        <div class="flex flex-col">
          <label for="email" class="font-semibold py-2">Your Email</label>
          <input
            class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
            id="email"
            type="email"
            v-model="email"
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
        <div class="text-center">
          <button
            class="py-2 px-4 mt-4 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "@vue/reactivity";
import { load_coach } from "../../hooks/load_coach";

const email = ref(null);
const message = ref(null);

const route = useRoute();
const coachId = computed(() => route.params.coachId);

const data = computed(() => load_coach(coachId.value));
</script>
