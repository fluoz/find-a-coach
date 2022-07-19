import { defineStore } from "pinia";
import axios from "axios";

export const useCoachStore = defineStore({
  id: "auth",
  state: () => ({
    userId: null,
    token: null,
    didAutoLogout: false,
  }),
  getters: {},
  actions: {
    async signup(context, payload) {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await axios.post(url, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });
    },
  },
});
