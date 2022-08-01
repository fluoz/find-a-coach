import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/coaches/CoachHome.vue";
import RequestsView from "../views/requests/RequestsHome.vue";
import CoachMember from "../views/coach_member/CoachMember.vue";
import MemberContact from "../views/coach_member/MemberContact.vue";
import RegisterView from "../views/register/RegisterView.vue";
import notFound from "../views/notFound.vue";
import UserAuth from "../views/auth/UserAuth.vue";
import { useAuthStore } from "../stores/auth";

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
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/coaches/:coachId",
      name: "coach-member",
      component: CoachMember,
      children: [
        {
          path: "contact",
          name: "coach-contact",
          component: MemberContact,
        },
      ],
    },

    {
      path: "/requests",
      name: "requests",
      component: RequestsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: UserAuth,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: notFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && auth.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
