<script setup>
import { useRouter, useRoute } from "vue-router";
import { logout } from "../helpers/auth";
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";

const router = useRouter();
const route = useRoute();

let show = ref(true);

const userStore = useUserStore();
</script>

<template>
  <div class="dropdown">
    <div class="profile">
      <a class="name" href="#">{{ userStore.name }} </a>
    </div>
    <div v-if="show" class="dropdownContent">
      <div class="dropdownItems flex col">
        <a class="navLink flex justify-between" href="#"
          >Profile <span> <font-awesome-icon icon="fa-solid fa-user" /> </span
        ></a>
        <RouterLink class="navLink flex justify-between" to="/clubs"
          >My Clubs
          <span><font-awesome-icon icon="fa-solid fa-cubes-stacked" /></span
        ></RouterLink>
        <a
          class="navLink flex justify-between"
          href="#"
          @click="logout(router, route, userStore)"
          >Logout
          <span
            ><font-awesome-icon icon="fa-solid fa-right-from-bracket" /></span
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
}

.name {
  color: inherit;
}

.dropdownContent {
  display: none;
  position: absolute;
  background-color: black;
  padding: 25px 10px 10px;
  top: 25px;
  left: -25px;
  text-align: left;
  width: 150px;
}

.dropdown:hover .dropdownContent {
  display: block;
}

.dropdownItems a {
  padding: 5px 10px;
}

.dropdownItems a:hover {
  background-color: white;
  color: black;
}
</style>
