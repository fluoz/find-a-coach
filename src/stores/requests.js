import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";

export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    request_data: [],
  }),
  getters: {},
  actions: {
    async getRequestData() {
      const auth = useAuthStore();
      axios
        .get(
          `${import.meta.env.VITE_FIREBASE}/requests/${auth.userId}.json?auth=${
            auth.token
          }`
        )
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
      const auth = useAuthStore();
      let userId = null;
      if (auth.userId) {
        userId = auth.userId;
      } else {
        userId = "noid";
      }
      axios
        .post(`${import.meta.env.VITE_FIREBASE}/requests/${userId}.json`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
});
