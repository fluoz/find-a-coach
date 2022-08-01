import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    email: null,
    userId: null,
    token: null,
    // didAutoLogout: false,
    tokenExpiration: null,
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

        this.token = response.data.idToken;
        this.userId = response.data.localId;
        this.tokenExpiration = response.data.expiresIn;
        this.email = response.data.email;
        console.log(this.email);
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
          this.token = response.data.idToken;
          this.userId = response.data.localId;
          this.tokenExpiration = response.data.expiresIn;
          this.email = response.data.email;
        }
        return response;
      } catch (err) {
        const error = new Error(
          err.response.data.error.message || "Failed signup to firebase"
        );
        throw error;
      }
    },
  },
});
