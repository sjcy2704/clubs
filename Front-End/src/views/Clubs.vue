<script setup>
import { watchEffect } from "vue";
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";
import { useClubStore } from "../stores/clubStore";

const clubStore = useClubStore();
clubStore.getClubs();

let search = ref("");
</script>

<template>
  <div class="container w-65">
    <div class="title">Clubs</div>
    <div class="flex justify-between">
      <div class="searchContainer">
        <input v-model="search" class="searchbar" type="search" />
        <font-awesome-icon
          class="searchicon"
          icon="fa-solid fa-magnifying-glass"
        />
      </div>
      <p>Filter</p>
    </div>
  </div>

  <div class="cardsContainer">
    <ClubCard
      class="item"
      v-for="club in clubStore.getCurrentClubs(search)"
      v-bind="club"
    />
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5em;
}

.searchContainer {
  position: relative;
}

.searchbar {
  padding-left: 33px;
}

.searchicon {
  position: absolute;
  left: 10px;
  top: 10px;
}

.cardsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 60%;
  margin: 0 auto;
}

.item {
  justify-self: center;
}
</style>
