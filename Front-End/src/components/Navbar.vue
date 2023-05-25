<script setup>
import Profile from "./Profile.vue";
import { useUserStore } from "../stores/userStore";

const navRoutes = [
  { name: "Home", path: "/", class: "home" },
  { name: "Clubs", path: "/clubs", class: "clubs" },
];

const logInRoutes = [
  { name: "Sign Up", path: "/signup", class: "signup" },
  { name: "Login", path: "/login", class: "login" },
];

const userStore = useUserStore();
</script>

<template>
  <header>
    <div class="topCorner"></div>
    <div class="topDiv flex justify-between">
      <RouterLink to="/" class="logo white">World-Execute-Me</RouterLink>
      <ul class="flex row sm-col justify-between nav">
        <li class="navItem" v-for="item in navRoutes">
          <RouterLink class="navLink" :to="item.path">{{
            item.name
          }}</RouterLink>
        </li>
        <li class="navItem" v-if="userStore.loggedIn">
          <RouterLink class="navLink" to="/user/clubs">My Clubs</RouterLink>
        </li>
        <li
          v-if="!userStore.loggedIn"
          class="navItem"
          v-for="item in logInRoutes"
        >
          <RouterLink class="navLink" :to="item.path">{{
            item.name
          }}</RouterLink>
        </li>
        <li v-if="userStore.loggedIn" class="navItem">
          <Profile />
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.logo {
  font-weight: 500;
}

.nav {
  width: 23%;
}

.navItem {
  padding: 2px 10px;
  text-align: center;
  border-radius: 8px;
  color: white;
}

.navItem:hover {
  color: black;
  background-color: white;
}

.navLink {
  color: inherit;
}

.topDiv {
  background-color: black;
  padding: 20px 100px;
}

.topCorner {
  box-sizing: content-box;
  border-top: 80px solid black;
  border-right: 100px solid transparent;
  height: 0;
  width: 320px;
  top: 0;
  position: absolute;
  z-index: -1;
}

@media only screen and (max-width: 550px) {
  .topDiv {
    padding: 15px 20px;
  }

  .topCorner {
    border-top: 70px solid black;
    border-right: 50px solid transparent;
  }
}
</style>
