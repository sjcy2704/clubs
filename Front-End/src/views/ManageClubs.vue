<script setup>
import { useUserStore } from "../stores/userStore.js";
import { useRouter } from "vue-router";
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";

const userStore = useUserStore();
const router = useRouter();
if (userStore.user.userType !== "manager") {
  router.push("/");
}

let clubs = ref([]);

async function getClubs() {
  await fetch(`http://localhost:8080/clubs/manager/${userStore.user.userID}`, {
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
    <div class="title">Manage Clubs</div>
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
