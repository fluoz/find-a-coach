<template>
  <div style="width: 800px" class="h-28 use-shadow rounded-2xl mt-12">
    <div class="container mx-auto p-5">
      <h1 class="text text-2xl font-bold">Find Your Coach</h1>
      <div class="flex w-64 justify-between">
        <div class="flex items-center mb-4 mt-4">
          <input
            id="frontend"
            type="checkbox"
            v-model="frontend"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
          />
          <label for="frontend" class="ml-2 font-semibold text-sm text-gray-900"
            >Frontend</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="backend"
            type="checkbox"
            v-model="backend"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
          />
          <label for="backend" class="ml-2 font-semibold text-sm text-gray-900"
            >Backend</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="career"
            type="checkbox"
            v-model="career"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
          />
          <label for="career" class="ml-2 font-semibold text-sm text-gray-900"
            >Career</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  frontend: {
    type: Boolean,
  },
  backend: {
    type: Boolean,
  },
  career: {
    type: Boolean,
  },
});

const frontend = ref(props.frontend);
const backend = ref(props.backend);
const career = ref(props.career);

const emit = defineEmits(["checkboxes"]);

watch([frontend, backend, career], () => {
  emit("checkboxes", { frontend, backend, career });
});
</script>
