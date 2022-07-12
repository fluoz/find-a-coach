import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/coaches/CoachHome.vue";
import RequestsView from "../views/requests/RequestsHome.vue";
import CoachMember from "../views/coach_member/CoachMember.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      name: "coaches",
      component: HomeView,
    },
    { path: "/coaches/:coachId", name: "coach-member", component: CoachMember },
    {
      path: "/requests",
      name: "requests",
      component: RequestsView,
    },
  ],
});

export default router;
