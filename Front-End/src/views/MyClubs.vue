<script setup>
import ViewClubs from "../components/ViewClubs.vue";
import { useUserStore } from "../stores/userStore";
import { ref } from "vue";
import { api } from "../helpers/api";

const userStore = useUserStore();

let allClubs = ref([]);
await api
  .get(`/users/${userStore.user.userID}/clubs`)
  .then(({ data }) => (allClubs.value = data));
</script>

<template>
  <ViewClubs :clubsList="allClubs" label="My Clubs" />
</template>
