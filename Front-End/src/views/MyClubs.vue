<script setup>
import ViewClubs from "../components/ViewClubs.vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>

<template>
  <ViewClubs
    :path-route="'users/' + userStore.user.userID + '/clubs'"
    label="My Clubs"
  />
</template>
