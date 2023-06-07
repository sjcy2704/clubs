<script setup>
import ViewClubs from "../components/ViewClubs.vue";
import { ref } from "vue";
import { api } from "../helpers/api";

let allClubs = ref([]);
await api.get("/clubs").then(({ data }) => (allClubs.value = data));
</script>

<template>
  <ViewClubs :clubsList="allClubs" label="Clubs" />
</template>
