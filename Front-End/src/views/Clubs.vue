<script setup>
import ClubCard from "../components/ClubCard.vue";
import { ref } from "vue";
import { watchEffect } from "vue";
import { api } from "../helpers/api";

let allClubs = ref([]);
await api.get("/clubs").then(({ data }) => (allClubs.value = data));

let search = ref("");
let showSearch = ref(false);
let categoryFilter = ref("");
let showFilter = ref(false);

const categories = ref([
  { value: "Academic" },
  { value: "Arts" },
  { value: "Business" },
  { value: "Cultural" },
  { value: "Faith & Religion" },
  { value: "Health" },
  { value: "Hobbies" },
  { value: "Language" },
  { value: "Media" },
  { value: "Politics" },
  { value: "Science" },
  { value: "Sports" },
  { value: "Technology" },
]);

function filterClubs(search, filter) {
  if (search === "" && filter === "") {
    return allClubs.value;
  }

  search = search.toLowerCase();
  return allClubs.value.filter((club) => {
    if (search === "" && filter !== "") {
      return club.category === filter;
    } else if (search !== "" && filter === "") {
      return (
        club.name.toLowerCase().includes(search) ||
        club.short_name.toLowerCase().includes(search) ||
        club.category.toLowerCase().includes(search)
      );
    }

    return (
      club.name.toLowerCase().includes(search) ||
      club.short_name.toLowerCase().includes(search) ||
      club.category.toLowerCase().includes(search) ||
      club.category === filter
    );
  });
}

let clubs = ref([]);

watchEffect(() => {
  clubs.value = filterClubs(search.value, categoryFilter.value);
});
</script>

<template>
  <div class="allClubsContainer flex col align-center">
    <div class="container w-100">
      <div class="title">Clubs</div>
      <div class="lookupContainer flex justify-between">
        <div class="searchContainer">
          <input
            :class="{ show: showSearch }"
            v-model="search"
            class="searchbar"
            type="search"
          />
          <font-awesome-icon
            class="searchicon"
            icon="fa-solid fa-magnifying-glass"
            @click="showSearch = !showSearch"
          />
        </div>

        <div class="filterContainer flex align-center">
          <div class="flex filter" :class="{ showFilter }">
            <select
              class="categorySelect"
              v-model="categoryFilter"
              :class="{ showFilter }"
            >
              <option value="" disabled selected>Category</option>
              <option v-for="category in categories" :value="category.value">
                {{ category.value }}
              </option>
            </select>
            <button
              v-if="categoryFilter !== ''"
              :class="{ hide: !showFilter }"
              type="button"
              class="filterButton resetFilter"
              @click="categoryFilter = ''"
            >
              Reset Filter
            </button>
          </div>
          <font-awesome-icon
            class="filterIcon"
            icon="fa-solid fa-filter"
            @click="showFilter = !showFilter"
          />
        </div>
      </div>
    </div>

    <div v-if="clubs.length > 0" class="cardsContainer">
      <ClubCard class="item" v-for="club in clubs" v-bind="club" />
    </div>
    <h2 v-if="clubs.length <= 0">No Clubs</h2>
  </div>
</template>

<style scoped>
.lookupContainer {
  margin-top: 30px;
  margin-bottom: 20px;
}

.hide {
  display: none;
}

.filter {
  gap: 20px;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  justify-content: end;
}

.filterContainer {
  gap: 20px;
  width: 40%;
  justify-content: end;
}
.categorySelect {
  width: 0;
  opacity: 0;
  transition: width 0.5s ease-out, opacity 0.5s ease;
}
.showFilter {
  opacity: 1;
  width: 100%;
}
.filterButton {
  margin: 0;
  width: 60%;
  padding: 9px;
  font-size: 0.8em;
}

.resetFilter {
  border: 2px solid black;
  color: black;
  background-color: white;
}
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
  margin-bottom: 0;
}

.show {
  width: 100%;
  opacity: 1;
}

.filterIcon {
  cursor: pointer;
  font-size: 1.2em;
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
  gap: 40px;
}

.item {
  justify-self: center;
}
</style>
