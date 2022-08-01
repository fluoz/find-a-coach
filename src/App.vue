<script setup>
import { onMounted } from "@vue/runtime-core";
import { useAuthStore } from "./stores/auth";
import TheNavbar from "./components/UI/TheNavbar.vue";

const auth = useAuthStore();

onMounted(() => {
  auth.tryLogin();
});
</script>

<template>
  <nav class="fixed w-full">
    <the-navbar></the-navbar>
  </nav>
  <div class="container mx-auto px-72 flex justify-center">
    <div class="mt-20">
      <RouterView v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style>
.use-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
body {
  overflow-y: scroll;
}

.route-enter-active {
  animation: route 0.3s ease-out;
}

.route-leave-active {
  animation: route 0.3s ease-in reverse;
}

@keyframes route {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
