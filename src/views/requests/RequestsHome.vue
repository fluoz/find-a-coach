<template>
  <div style="width: 800px" class="use-shadow rounded-2xl mt-12">
    <div class="container mx-auto p-5">
      <h1 class="text-center font-bold text-2xl">Requests Received</h1>
      <p v-if="isAvailable" class="text-center py-3 text-base">
        You haven't received any requests yet!
      </p>
      <requests-lists
        v-else
        v-for="req in requests"
        :key="req.id"
        :data="req"
      ></requests-lists>
    </div>
  </div>
</template>

<script setup>
import { useRequestStore } from "../../stores/requests";
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import RequestsLists from "../../components/requests/RequestsLists.vue";

const requestsStore = useRequestStore();
const requests = computed(() => requestsStore.request_data);

const isAvailable = computed(() => requests.value.length == 0);

const loadData = async () => {
  try {
    const req = await requestsStore.getRequestData();
  } catch (e) {}
};

onMounted(() => {
  loadData();
});
</script>
