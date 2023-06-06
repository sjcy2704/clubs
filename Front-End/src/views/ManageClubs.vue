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
  <div class="mainContainer flex col align-center">
    <div class="container flex align-center justify-between sm-col">
      <div class="title">Manage Clubs</div>
      <RouterLink to="/clubs/register" class="newClub">
        New Club
        <font-awesome-icon class="plus" icon="fa-solid fa-plus" />
      </RouterLink>
    </div>

    <div class="cardsContainer">
      <ClubCard v-for="club in clubs" v-bind="club" manage />
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  margin-bottom: 70px;
  margin-top: 50px;
}
.container {
  position: relative;
  width: 100%;
}

.cardsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
}

.title {
  text-align: center;
  font-size: 2.5em;
  flex-grow: 1;
}

.newClub {
  padding: 10px;
  background-color: black;
  border-radius: 10px;
}

.plus {
  font-size: 1.25em;
}

@media only screen and (max-width: 550px) {
  .title {
    margin-bottom: 20px;
  }

  .cardsContainer {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .newClub {
    width: 100%;
  }
}
</style>
