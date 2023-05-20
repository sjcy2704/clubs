<script setup>
import { useRouter, useRoute } from "vue-router";
import { logout } from "../helpers/auth";
import { ref, computed } from "vue";
import { useUserStore } from "../stores/userStore";

const router = useRouter();
const route = useRoute();

let show = ref(true);

const userStore = useUserStore();
</script>

<template>
  <div class="dropdown">
    <div class="profile">
      <a class="name" href="#">{{ userStore.username }}</a>
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
    <div v-if="show" class="dropdownContent">
      <div class="flex col">
        <a class="navLink" href="#">Profile</a>
        <a class="navLink" href="#">Settings</a>
        <a class="navLink" href="#" @click="logout(router, route, userStore)"
          >Logout</a
        >
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
