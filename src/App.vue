<script setup>
import { onMounted } from "@vue/runtime-core";
import TheNavbar from "./components/UI/TheNavbar.vue";
import { useCoachStore } from "./stores/coachsApi";

const coaches = useCoachStore();
onMounted(() => {
  coaches.getCoachData();
});
</script>

<template>
  <nav>
    <the-navbar></the-navbar>
  </nav>
  <div class="container mx-auto px-72 flex justify-center">
    <RouterView />
  </div>
</template>

<style>
.use-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
