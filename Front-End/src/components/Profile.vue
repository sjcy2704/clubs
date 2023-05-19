<script setup>
import { useRouter, useRoute } from "vue-router";
import { logout } from "../helpers/auth";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

let show = ref(true);
</script>
<template>
  <div class="dropdown">
    <div class="profile">
      <a class="name" href="#">Jose</a>
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
    <div v-if="show" class="dropdownContent">
      <div class="flex col">
        <a class="navLink" href="#" @click="logout(router, route)">Profile</a>
        <a class="navLink" href="#" @click="logout(router, route)">Settings</a>
        <a class="navLink" href="#" @click="logout(router, route)">Logout</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
}

.name {
  margin-right: 10px;
  color: inherit;
}

.dropdownContent {
  display: none;
  position: absolute;
  background-color: black;
  padding: 25px 10px 10px;
  top: 25px;
  left: -10px;
  text-align: left;
}

.dropdown:hover .dropdownContent {
  display: block;
}
</style>
