import { ref } from "vue";

export const dialogFunc = () => {
  const error = ref("");
  const modalHead = ref("");
  const open = ref(false);

  const toFalse = () => {
    open.value = false;
  };

  return { error, modalHead, open, toFalse };
};
