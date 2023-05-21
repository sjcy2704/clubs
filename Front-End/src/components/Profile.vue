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
        <div v-if="userStore.user.userType === 'admin'">
          <RouterLink class="navLink flex justify-between" to="/"
            >Dashboard
            <span><font-awesome-icon icon="fa-solid fa-table-columns" /></span
          ></RouterLink>
        </div>
        <div v-if="userStore.user.userType != 'admin'">
          <a class="navLink flex justify-between" href="#"
            >Profile <span> <font-awesome-icon icon="fa-solid fa-user" /> </span
          ></a>
          <RouterLink class="navLink flex justify-between" to="/clubs"
            >My Clubs
            <span><font-awesome-icon icon="fa-solid fa-cubes-stacked" /></span
          ></RouterLink>
        </div>
        <div v-if="userStore.user.userType === 'manager'">
          <RouterLink class="navLink flex justify-between" to="/clubs/manage"
            >Manage
            <span> <font-awesome-icon icon="fa-solid fa-bars-progress" /> </span
          ></RouterLink>
        </div>
        <a class="navLink flex justify-between" href="#"
          >Settings <span> <font-awesome-icon icon="fa-solid fa-gear" /> </span
        ></a>
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
  left: -40px;
  text-align: left;
  width: 185px;
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
