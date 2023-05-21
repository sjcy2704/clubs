import { createWebHistory, createRouter } from "vue-router";

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
      { path: "manage", component: ManageClubs },
    ],
  },
  { name: "Sign Up", path: "/signup", component: SignUp },
  { name: "Login", path: "/login", component: Login },
  {
    name: "ClubSignUp",
    path: "/clubsignup",
    component: ClubSignUp,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
