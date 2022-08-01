import { defineStore } from "pinia";
import axios from "axios";

let timer;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    email: null,
    userId: null,
    token: null,
    // didAutoLogout: false,
  }),
  getters: {
    isAuthenticated: (state) => {
      return !!state.token;
    },
  },
  actions: {
    async signup(payload) {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_API_KEY
      }`;
      try {
        const response = await axios.post(url, {
          email: payload.email.value,
          password: payload.password.value,
          returnSecureToken: true,
        });

        return response;
      } catch (err) {
        const error = new Error(
          err.response.data.error.message || "Failed signup to firebase"
        );
        throw error;
      }
    },
    async login(payload) {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        import.meta.env.VITE_API_KEY
      }`;
      try {
        const response = await axios.post(url, {
          email: payload.email.value,
          password: payload.password.value,
          returnSecureToken: true,
        });
        if (response.status == 200) {
          const expiresIn = +response.data.expiresIn * 1000;
          // const expiresIn = 5000;
          const expirationDate = new Date().getTime() + expiresIn;

          localStorage.setItem("token", response.data.idToken);
          localStorage.setItem("userId", response.data.localId);
          localStorage.setItem("tokenExpiration", expirationDate);
          localStorage.setItem("email", response.data.email);

          this.token = response.data.idToken;
          this.userId = response.data.localId;
          this.email = response.data.email;

          timer = setTimeout(() => {
            this.logout();
          }, expiresIn);
        }
        return response;
      } catch (err) {
        const error = new Error(
          err.response.data.error.message || "Failed signup to firebase"
        );
        throw error;
      }
    },
    tryLogin() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const email = localStorage.getItem("email");

      const expiresIn = +tokenExpiration - new Date().getTime();
      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(function () {
        this.logout();
      }, expiresIn);

      if (token && userId) {
        this.token = localStorage.getItem("token");
        this.userId = localStorage.getItem("userId");
        this.email = localStorage.getItem("email");
      }
    },
    logout() {
      localStorage.clear();
      clearTimeout(timer);

      this.token = null;
      this.userId = null;
      this.tokenExpiration = null;
      this.email = null;
    },
  },
});
