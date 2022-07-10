<template>
  <div class="max-w-[800px] use-shadow rounded-lg">
    <div class="container mx-auto p-5">
      <button
        class="px-3 py-2 border border-violet-700 rounded-lg"
        @click="coachStore.getCoachData"
      >
        Refresh
      </button>
      <div class="mt-4">
        <ul>
          <the-lists
            v-for="coach in coaches"
            :data="coach"
            :key="coach.id"
          ></the-lists>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCoachStore } from "../../stores/coachsApi.js";
import { computed } from "@vue/reactivity";
import TheLists from "./TheLists.vue";

const coachStore = useCoachStore();
const coaches = computed(() => coachStore.data);
</script>
