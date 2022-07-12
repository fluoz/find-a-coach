import { computed, reactive } from "@vue/reactivity";
import { useCoachStore } from "../stores/coachsApi.js";

export const load_coach = (id) => {
  const coaches = useCoachStore();
  const data = reactive({});

  const selectedCoaches = computed(() => coaches.data);

  for (const dataId of selectedCoaches.value) {
    if (dataId.id === id) {
      data.value = dataId;
      return data;
    }
  }
};
