<script setup>
import FindCoach from "../../components/Home/FindCoach.vue";
import TheCoachs from "../../components/Home/TheCoachs.vue";
import TheSpinner from "../../components/UI/TheSpinner.vue";
import { computed, onMounted, provide, ref } from "vue";
import { useCoachStore } from "../../stores/coachsApi.js";
import { useAuthStore } from "../../stores/auth";

const auth = useAuthStore();
const coaches = useCoachStore();
const loading = ref(false);

const frontend = ref(true);
const backend = ref(true);
const career = ref(true);

const btnLink = ref("null");

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
  // await new Promise((r) => setTimeout(r, 100));
  try {
    const coachdata = await coaches.getCoachData();
  } catch (e) {}
  loading.value = false;
};

const authRoute = computed(() => {
  if (auth.isAuthenticated) {
    btnLink.value = "Register as a Coach";
    return { name: "register" };
  }
  btnLink.value = "Login to Register as a Coach";
  return "/auth?redirect=register";
});

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
    <div class="mt-10 pb-20">
      <div class="max-w-[800px] use-shadow rounded-lg">
        <div class="container mx-auto p-5">
          <div class="flex justify-between items-center">
            <button
              class="px-3 py-2 border border-violet-700 rounded-lg"
              @click="loadData"
            >
              Refresh
            </button>
            <router-link
              class="inline-block border px-4 py-3 text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-full"
              :to="authRoute"
              >{{ btnLink }}</router-link
            >
          </div>

          <div class="mt-4">
            <the-spinner v-if="loading"></the-spinner>
            <the-coachs v-else></the-coachs>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
