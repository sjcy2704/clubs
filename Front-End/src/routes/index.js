import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("../views/Home.vue");
const Clubs = () => import("../views/Clubs.vue");
const Login = () => import("../views/Login.vue");
const SignUp = () => import("../views/SignUp.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/clubs", component: Clubs },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
