<script setup>
import { useUserStore } from "../stores/userStore.js";
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";
import { api } from "../helpers/api";

const userStore = useUserStore();

let clubs = ref([]);

await api
  .get(`/users/${userStore.user.userID}/clubs`)
  .then(({ data }) => (clubs.value = data));
</script>

<template>
  <div class="mainContainer flex col align-center w-100">
    <div class="container">
      <div class="title">My Clubs</div>
    </div>

    <div class="noClubs" v-if="clubs.length === 0">
      <h2>No clubs joined!</h2>
      <p>Join one here <RouterLink to="/clubs">Clubs</RouterLink></p>
    </div>

    <div class="cardsContainer flex flex-wrap">
      <ClubCard v-for="club in clubs" v-bind="club" />
      <ClubCard v-for="club in clubs" v-bind="club" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.cardsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
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

.noClubs a {
  color: black;
}

@media only screen and (max-width: 550px) {
  .cardsContainer {
    grid-template-columns: 1fr;
  }
}
</style>
