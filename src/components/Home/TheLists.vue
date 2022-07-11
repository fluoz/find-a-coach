<template>
  <li>
    <div class="border my-4">
      <div class="container mx-auto p-4">
        <div>
          <h1 class="font-bold text-2xl">{{ data.name }}</h1>
          <h2 class="font-bold">${{ data.price }}/hour</h2>
          <div class="flex mt-2 relative">
            <div
              class="text-sm mr-2"
              :class="typeColor(type)"
              v-for="type in data.type"
              :key="type"
            >
              {{ type.toUpperCase() }}
            </div>
            <div class="flex bottom-1 right-0 absolute">
              <button
                class="ml-4 py-2 px-4 text-purple-700 border border-violet-600 bg-white hover:bg-violet-200 font-medium rounded-md"
              >
                Contact
              </button>
              <button
                class="ml-4 py-2 px-4 text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
              >
                View Details
              </button>
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
