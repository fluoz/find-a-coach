<template>
  <div class="h-20 bg-violet-900 w-full flex items-center justify-between">
    <router-link to="/" class="text-white text-2xl font-bold ml-48"
      >Find a Coach</router-link
    >
    <div class="mr-48">
      <router-link class="text-lg text-purple-300 px-6 py-3 mr-2" to="/coaches"
        >All Coaches</router-link
      >
      <router-link class="text-lg text-purple-300 py-3 px-6" to="/requests"
        >Requests</router-link
      >
      <button
        v-if="auth.isAuthenticated"
        @click="logout"
        class="text-lg bg-purple-300 text-purple-800 py-2 px-8 ml-6 rounded-md"
      >
        Logout
      </button>
      <button
        @click="toLogin"
        v-else
        class="text-lg bg-purple-300 text-purple-800 py-2 px-8 ml-6 rounded-md"
      >
        Login
      </button>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
const auth = useAuthStore();
const router = useRouter();
const toLogin = () => {
  router.push({ name: "auth" });
};
const logout = () => {
  auth.logout();
  router.push({ name: "home" });
};
</script>
<style scoped>
.router-link-exact-active {
  border: 1px solid rgb(216 180 254);
}
a {
  border: 1px solid transparent;
}
</style>
