import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("../views/Home.vue");
const Clubs = () => import("../views/Clubs.vue");
const Memberships = () => import("../views/Memberships.vue");
const Login = () => import("../views/Login.vue");
const SignUp = () => import("../views/SignUp.vue");

export const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Clubs", path: "/clubs", component: Clubs },
  { name: "Memberships", path: "/memberships", component: Memberships },
  { name: "Sign Up", path: "/signup", component: SignUp },
  { name: "Login", path: "/login", component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
