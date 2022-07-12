import { defineStore } from "pinia";
import axios from "axios";

export const useCoachStore = defineStore({
  id: "coachs-api",
  state: () => ({
    data: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getCoachData() {
      axios.get(`${import.meta.env.VITE_FIREBASE}/coaches.json`).then((res) => {
        const data = res.data;
        const result = [];

        for (const id in data) {
          result.push({
            id: id,
            name: data[id].name,
            price: data[id].price,
            type: data[id].type,
            description: data[id].description,
          });
        }
        this.data = result;
        // console.log(result);
      });
    },
  },
});
