<template>
  <div class="border w-full py-4 my-4 px-3">
    <p class="font-bold text-lg text-purple-900">{{ data.email }}</p>
    <p class="text-sm text-purple-800">to: {{ data.to }}</p>
    <p class="text-base mt-2">{{ data.message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object },
});
</script>
