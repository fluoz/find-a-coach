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
            v-for="coach in filteredCoaches"
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
import { computed, toRefs, ref } from "@vue/reactivity";
import TheLists from "./TheLists.vue";
import { inject, watch } from "@vue/runtime-core";

const frontend = inject("frontend");
const backend = inject("backend");
const career = inject("career");

const coachStore = useCoachStore();
const coaches = computed(() => coachStore.data);
const filteredCoaches = computed(() => {
  return coaches.value.filter((e) => {
    if (frontend.value && e.type.includes("frontend")) {
      return true;
    }
    if (backend.value && e.type.includes("backend")) {
      return true;
    }
    if (career.value && e.type.includes("career")) {
      return true;
    }
    return false;
  });
});
</script>
