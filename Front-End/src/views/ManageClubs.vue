<script setup>
import { useUserStore } from "../stores/userStore.js";
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";

const userStore = useUserStore();

let clubs = ref([]);

await fetch(`http://localhost:8080/clubs/manager/${userStore.user.userID}`, {
  method: "GET",
  credentials: "include",
}).then((res) => {
  res.json().then((json) => {
    clubs.value = json;
  });
});
</script>

<template>
  <div class="container">
    <div class="title">Manage Clubs</div>
    <RouterLink to="/clubs/register" class="newClub">
      <font-awesome-icon class="plus" icon="fa-solid fa-plus" />
    </RouterLink>
  </div>

  <div class="cardsContainer flex flex-wrap">
    <ClubCard v-for="club in clubs" v-bind="club" />
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
