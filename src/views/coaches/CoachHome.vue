<script setup>
import FindCoach from "../../components/Home/FindCoach.vue";
import TheCoachs from "../../components/Home/TheCoachs.vue";
import TheSpinner from "../../components/UI/TheSpinner.vue";
import { computed, onMounted, provide, ref } from "vue";
import { useCoachStore } from "../../stores/coachsApi.js";

const coaches = useCoachStore();
const loading = ref(false);

const frontend = ref(true);
const backend = ref(true);
const career = ref(true);

provide("frontend", frontend);
provide("backend", backend);
provide("career", career);

const getDataBox = (data) => {
  frontend.value = data.frontend.value;
  backend.value = data.backend.value;
  career.value = data.career.value;
};

const loadData = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 100));
  try {
    const coachdata = await coaches.getCoachData();
  } catch (e) {}
  loading.value = false;
};

onMounted(() => {
  loadData();
});
</script>

<template>
  <section>
    <find-coach
      :frontend="frontend"
      :backend="backend"
      :career="career"
      @checkboxes="getDataBox"
    ></find-coach>
    <div class="mt-10">
      <div class="max-w-[800px] use-shadow rounded-lg">
        <div class="container mx-auto p-5">
          <button
            class="px-3 py-2 border border-violet-700 rounded-lg"
            @click="loadData"
          >
            Refresh
          </button>
          <div class="mt-4">
            <the-spinner v-if="loading"></the-spinner>
            <the-coachs v-else></the-coachs>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
