<template>
  <div style="width: 800px" class="use-shadow rounded-2xl mt-12">
    <div class="container mx-auto p-5">
      <div class="flex mt-2 relative">
        <div
          class="text-sm mr-2"
          :class="typeColor(type)"
          v-for="type in data.type"
          :key="type"
        >
          {{ type.toUpperCase() }}
        </div>
      </div>
      <p class="mt-4 text-base">{{ data.description }}</p>
    </div>
  </div>
</template>
<script setup>
import { typeColor } from "../../hooks/colorbanner";
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>
