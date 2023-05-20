<script setup>
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";

let clubs = ref([]);

async function getClubs() {
  const res = await fetch("http://localhost:8080/clubs", {
    method: "GET",
    credentials: "include",
  });
  await res.json().then((json) => {
    clubs.value = json;
  });
}
getClubs();
</script>

<template>
  <div class="container">
    <div class="title">Clubs</div>
  </div>

  <div class="cardsContainer flex flex-wrap">
    <ClubCard
      v-for="club in clubs"
      :name="club.short_name"
      :category="club.category"
      :members="club.members"
    />
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
