<script setup>
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";
import { useClubStore } from "../stores/clubStore";

const clubStore = useClubStore();
clubStore.getClubs();

let search = ref("");
let showSearch = ref(false);
</script>

<template>
  <div class="container w-65">
    <div class="title">Clubs</div>
    <div class="flex justify-between">
      <div class="searchContainer">
        <Transition>
          <input
            :class="{ show: showSearch }"
            v-model="search"
            class="searchbar"
            type="search"
          />
        </Transition>
        <font-awesome-icon
          class="searchicon"
          icon="fa-solid fa-magnifying-glass"
          @click="showSearch = !showSearch"
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
  text-align: left;
}

.searchbar {
  padding-left: 33px;
  width: 0%;
  opacity: 0;
  transition: width 0.5s ease-out, opacity 0.5s ease;
}

.show {
  width: 100%;
  opacity: 1;
}

.searchicon {
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
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
