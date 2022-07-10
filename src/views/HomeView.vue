<script setup>
import FindCoach from "../components/Home/FindCoach.vue";
import TheCoachs from "../components/Home/TheCoachs.vue";
import { computed, provide, ref, watch } from "vue";

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
      <the-coachs></the-coachs>
    </div>
  </section>
</template>
