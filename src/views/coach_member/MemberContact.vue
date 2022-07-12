<template>
  <p class="py-5">Contact : {{ data.value.name }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import { load_coach } from "../../hooks/load_coach";

const route = useRoute();
const coachId = computed(() => route.params.coachId);

const data = computed(() => load_coach(coachId.value));
</script>
