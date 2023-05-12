import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("../views/Home.vue");
const Clubs = () => import("../views/Clubs.vue");
const Login = () => import("../views/Login.vue");
const SignUp = () => import("../views/SignUp.vue");

export const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Clubs", path: "/clubs", component: Clubs },
  { name: "Sign Up", path: "/signup", component: SignUp },
  { name: "Login", path: "/login", component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
