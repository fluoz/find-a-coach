<template>
  <li>
    <div class="border my-4">
      <div class="container mx-auto p-4">
        <div>
          <h1 class="font-bold text-2xl">{{ data.name }}</h1>
          <h2 class="font-bold">${{ data.price }}/hour</h2>
          <div class="flex mt-2">
            <div
              class="text-sm mr-2"
              :class="typeColor(type)"
              v-for="type in data.type"
              :key="type"
            >
              {{ type.toUpperCase() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});

const typeColor = (type) => {
  if (type === "frontend") {
    return ["px-3", "py-1", "bg-red-800", "text-white", "rounded-full"];
  } else if (type === "career") {
    return ["px-3", "py-1", "bg-blue-800", "text-white", "rounded-full"];
  }
  return ["px-3", "py-1", "bg-purple-800", "text-white", "rounded-full"];
};
</script>
