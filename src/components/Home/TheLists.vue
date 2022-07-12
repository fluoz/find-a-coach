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
              <router-link
                class="ml-4 py-2 px-4 text-purple-700 border border-violet-600 bg-white hover:bg-violet-200 font-medium rounded-md"
                :to="{
                  name: 'coach-contact',
                  params: { coachId: props.data.id },
                }"
                >Contact</router-link
              >

              <router-link
                :to="{
                  name: 'coach-member',
                  params: { coachId: props.data.id },
                }"
                class="ml-4 py-2 px-4 text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
              >
                View Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { typeColor } from "../../hooks/colorbanner";

const props = defineProps({
  data: {
    type: Object,
  },
});
</script>
