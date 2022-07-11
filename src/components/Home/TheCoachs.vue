<template>
  <ul>
    <the-lists
      v-for="coach in filteredCoaches"
      :data="coach"
      :key="coach.id"
    ></the-lists>
  </ul>
</template>

<script setup>
import { useCoachStore } from "../../stores/coachsApi.js";
import { computed } from "@vue/reactivity";
import TheLists from "./TheLists.vue";
import { inject } from "@vue/runtime-core";

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
