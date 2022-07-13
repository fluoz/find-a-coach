import { defineStore } from "pinia";
import axios from "axios";

export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    request_data: [],
  }),
  getters: {},
  actions: {
    async getRequestData() {
      axios.get(`${import.meta.env.VITE_FIREBASE}/request.json`).then((res) => {
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
        this.request_data = result;
      });
    },
    async postRequestData(data) {
      axios
        .post(`${import.meta.env.VITE_FIREBASE}/requests.json`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
});
