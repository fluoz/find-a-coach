<template>
  <section>
    <div style="width: 800px" class="h-28 use-shadow rounded-2xl mt-12">
      <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold">{{ data.value.name }}</h1>
        <p class="font-bold mt-2 text-base">${{ data.value.price }}/hour</p>
      </div>
    </div>
    <div style="width: 800px" class="h-32 use-shadow rounded-2xl mt-8">
      <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold">Interested? Reach out now!</h1>
        <button
          class="my-4 py-2 px-4 text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
        >
          Contact
        </button>
      </div>
    </div>
    <view-details :data="data.value"></view-details>
  </section>
</template>
<script setup>
import { computed, reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useCoachStore } from "../../stores/coachsApi";
import ViewDetails from "../../components/Member/ViewDetails.vue";

const coaches = useCoachStore();
const route = useRoute();
const data = reactive({});
const coachId = computed(() => route.params.coachId);

const selectedCoaches = computed(() => coaches.data);

for (const dataId of selectedCoaches.value) {
  if (dataId.id === coachId.value) {
    data.value = dataId;
  }
}
</script>
