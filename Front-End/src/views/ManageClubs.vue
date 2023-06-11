<script setup>
import ViewClubs from "../components/ViewClubs.vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>

<template>
  <ViewClubs
    :path-route="'clubs/manager/' + userStore.user.userID"
    label="Manage Clubs"
    manager
  />
</template>
