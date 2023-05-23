import { createWebHistory, createRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";

const Home = () => import("../views/Home.vue");
const Clubs = () => import("../views/Clubs.vue");
const Login = () => import("../views/Login.vue");
const SignUp = () => import("../views/SignUp.vue");
const ClubSignUp = () => import("../views/ClubRegisterForm.vue");
const ManageClubs = () => import("../views/ManageClubs.vue");
const ClubsRouterView = () => import("../views/ClubsRouterView.vue");

export const routes = [
  { name: "Home", path: "/", component: Home },
  {
    path: "/clubs",
    component: ClubsRouterView,
    children: [
      { name: "Clubs", path: "", component: Clubs },
      {
        path: "manage",
        component: ManageClubs,
        meta: { requiresAuth: true, privilages: true },
      },
      {
        path: "register",
        component: ClubSignUp,
        meta: { requiresAuth: true, privilages: true },
      },
    ],
  },
  {
    name: "Sign Up",
    path: "/signup",
    component: SignUp,
    meta: { guestOnly: true },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: { guestOnly: true },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userStore.loggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((record) => record.meta.guestOnly)) {
    if (userStore.loggedIn) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.matched.some((record) => record.meta.privilages)) {
    if (
      userStore.user.userType === "admin" ||
      userStore.user.userType === "manager"
    ) {
      next();
      return;
    }

    next("/");
  } else {
    next();
  }
});
