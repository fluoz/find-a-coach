<template>
  <div style="width: 800px" class="use-shadow rounded-2xl mt-12">
    <div class="container mx-auto p-5">
      <component :is="authComp"></component>
      <div class="flex w-full justify-end">
        <button class="underline text-violet-500" @click="generateMode">
          {{ authMessage }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "@vue/runtime-core";
import TheLogin from "../../components/auth/TheLogin.vue";
import TheSign from "../../components/auth/TheSign.vue";

const authMessage = ref("Dont have account? Sign up here");
const authComp = shallowRef(TheLogin);

const generateMode = () => {
  if (authComp.value == TheLogin) {
    authComp.value = TheSign;
    authMessage.value = "Already have account? Login here";
  } else {
    authComp.value = TheLogin;
    authMessage.value = "Dont have account? Sign up here";
  }
};
</script>
