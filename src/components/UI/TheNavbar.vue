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
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-exact-active {
  border: 1px solid rgb(216 180 254);
}
a {
  border: 1px solid transparent;
}
</style>
