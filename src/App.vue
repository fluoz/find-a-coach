<script setup>
import TheNavbar from "./components/UI/TheNavbar.vue";
</script>

<template>
  <nav>
    <the-navbar></the-navbar>
  </nav>
  <div class="container mx-auto px-72 flex justify-center">
    <RouterView />
  </div>
</template>

<style>
.use-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
