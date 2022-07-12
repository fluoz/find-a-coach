import { computed } from "@vue/reactivity";

export const typeColor = (type) => {
  if (type === "frontend") {
    return ["px-3", "py-1", "bg-red-800", "text-white", "rounded-full"];
  } else if (type === "career") {
    return ["px-3", "py-1", "bg-blue-800", "text-white", "rounded-full"];
  }
  return ["px-3", "py-1", "bg-purple-800", "text-white", "rounded-full"];
};
