<script setup>
import { useUserStore } from "../stores/userStore.js";
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";
import { api } from "../helpers/api";

const userStore = useUserStore();

let clubs = ref([]);

await api
  .get(`/clubs/manager/${userStore.user.userID}`)
  .then(({ data }) => (clubs.value = data));
</script>

<template>
  <div class="flex col align-center">
    <div class="container">
      <div class="title">Manage Clubs</div>
      <RouterLink to="/clubs/register" class="newClub">
        New Club
        <font-awesome-icon class="plus" icon="fa-solid fa-plus" />
      </RouterLink>
    </div>

    <div class="cardsContainer flex flex-wrap">
      <ClubCard v-for="club in clubs" v-bind="club" manage />
    </div>
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
  width: 150px;
  padding: 10px 0;
  right: -200px;
  top: 30%;
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
