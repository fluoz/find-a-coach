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
      axios
        .get(`${import.meta.env.VITE_FIREBASE}/requests.json`)
        .then((res) => {
          const data = res.data;
          const result = [];
          for (const id in data) {
            result.push({
              id: id,
              email: data[id].email,
              message: data[id].message,
              to: data[id].to,
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
