<script setup>
import { useUserStore } from "../stores/userStore.js";
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";

const userStore = useUserStore();

let clubs = ref([]);

async function getClubs() {
  await fetch(`http://localhost:8080/users/${userStore.user.userID}/clubs`, {
    method: "GET",
    credentials: "include",
  }).then((res) => {
    res.json().then((json) => {
      clubs.value = json;
    });
  });
}

getClubs();
</script>

<template>
  <div class="container">
    <div class="title">My Clubs</div>
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
.container {
  position: relative;
}

.title {
  font-size: 2.5em;
  text-align: left;
}

.newClub {
  position: absolute;
  width: 50px;
  padding: 10px 0;
  right: -200px;
  top: 35%;
  background-color: black;
  border-radius: 10px;
}

.plus {
  font-size: 1.25em;
}

.cardsContainer {
  gap: 40px;
  width: 60%;
  margin: 0 auto;
}
</style>
