<template>
  <section>
    <div style="width: 800px" class="h-28 use-shadow rounded-2xl mt-12">
      <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold">{{ data.value.name }}</h1>
        <p class="font-bold mt-2 text-base">${{ data.value.price }}/hour</p>
      </div>
    </div>
    <div style="width: 800px" class="use-shadow rounded-2xl mt-8">
      <div class="container mx-auto px-5 pt-5">
        <h1 class="text-2xl font-bold">Interested? Reach out now!</h1>
        <router-link
          class="py-2 px-4 inline-block my-4 text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
          :to="{ name: 'coach-contact' }"
        >
          Contact
        </router-link>
        <router-view></router-view>
      </div>
    </div>
    <view-details :data="data.value"></view-details>
  </section>
</template>
<script setup>
import { computed, reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
import ViewDetails from "../../components/Member/ViewDetails.vue";
import { load_coach } from "../../hooks/load_coach";

const route = useRoute();
const coachId = computed(() => route.params.coachId);

const data = computed(() => load_coach(coachId.value));
</script>
