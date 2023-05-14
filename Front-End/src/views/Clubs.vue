<script setup>
import { onBeforeUpdate, onUpdated } from "vue";
import ClubCard from "../components/ClubCard.vue";
import { useClubStore } from "../stores/ClubStore";

const clubStore = useClubStore();
clubStore.getClubs();

// onUpdated(() => {});

// onBeforeUpdate(() => {
//   clubStore.getMembersCount();
//   clubStore.mapMembersCount();
// });
</script>

<template>
  <div class="container">
    <div class="title">Clubs</div>
  </div>

  <div class="cardsContainer flex flex-wrap">
    <ClubCard
      v-for="club in clubStore.clubs"
      :name="club.name"
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
