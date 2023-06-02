<script setup>
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";

let clubs = ref([]);

await fetch("http://localhost:8080/clubs", {
  method: "GET",
  credentials: "include",
}).then((res) =>
  res.json().then((json) => {
    clubs.value = json;
  })
);
</script>

<template>
  <div class="container">
    <div class="title">Clubs</div>
  </div>

  <div class="cardsContainer flex flex-wrap">
    <ClubCard v-for="club in clubs" v-bind="club" />
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5em;
}

.cardsContainer {
  gap: 40px;
  width: 60%;
  margin: 0 auto;
}
</style>
