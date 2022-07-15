<template>
  <section>
    <div class="container border-2 border-slate-300 rounded-md mt-4 mb-8">
      <div class="py-3 px-3">
        <div class="flex flex-col">
          <label for="email" class="font-semibold py-2">Your Email</label>
          <input
            class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
            id="email"
            type="email"
            v-model="email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="message" class="font-semibold py-2">Message</label>
          <textarea
            class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline h-28"
            id="message"
            v-model="message"
            required
          />
        </div>
        <div class="text-center">
          <button
            class="py-2 px-4 mt-4 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
            @click="submitForm(email, message)"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
    <dialog-modal :open="open" @close="toFalse">
      <template #head> {{ modalHead }}</template>
      <template #message> {{ error }} </template>
    </dialog-modal>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "@vue/reactivity";
import { load_coach } from "../../hooks/load_coach";
import DialogModal from "../../components/UI/DialogModal.vue";
import * as EmailValidator from "email-validator";
import { useRequestStore } from "../../stores/requests";

const email = ref(null);
const message = ref(null);

const route = useRoute();
const router = useRouter();
const coachId = computed(() => route.params.coachId);
const error = ref("");
const modalHead = ref("");
const open = ref(false);
const requestsStore = useRequestStore();

const toFalse = () => {
  open.value = false;
};

const userContact = computed(() => load_coach(coachId.value));

async function submitForm(mail, msg) {
  const isValid = EmailValidator.validate(mail);
  if (!mail || !msg) {
    modalHead.value = "An error occured";
    error.value = "Maybe your email or message is empty";
    open.value = true;
  } else if (!isValid) {
    modalHead.value = "An error occured";
    error.value = "Wrong email address";
    open.value = true;
  } else {
    try {
      const data = {
        email: mail,
        message: msg,
        to: userContact.value.value.name,
      };
      const requestData = await requestsStore.postRequestData(data);
      router.push({ name: "coaches" });
    } catch (e) {
      modalHead.value = "An error occured";
      error.value = "Error when post to firebase";
      open.value = true;
      email.value = null;
      message.value = null;
    }
  }
}

const data = computed(() => load_coach(coachId.value));
</script>
