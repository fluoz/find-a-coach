<template>
  <div style="width: 800px" class="use-shadow rounded-2xl mt-12">
    <div v-if="auth.isAuthenticated" class="container mx-auto p-5">
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
    <div class="container text-center mx-auto p-5" v-else>
      <h1 class="font-bold text-2xl">Login to see your Requests</h1>
      <router-link
        :to="{ name: 'auth' }"
        class="py-2 px-4 mt-4 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
      >
        Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRequestStore } from "../../stores/requests";
import { useAuthStore } from "../../stores/auth";
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import RequestsLists from "../../components/requests/RequestsLists.vue";

const requestsStore = useRequestStore();
const requests = computed(() => requestsStore.request_data);
const auth = useAuthStore();

const isAvailable = computed(() => requests.value.length == 0);

const loadData = async () => {
  if (auth.isAuthenticated) {
    try {
      const req = await requestsStore.getRequestData();
    } catch (e) {}
  }
};

onMounted(() => {
  loadData();
});
</script>
