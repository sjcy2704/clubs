<script setup>
import ClubCard from "../components/HomeClubCard.vue";

import { ref } from "vue";
import { api } from "../helpers/api";

let clubs = ref([]);

async function getClubs() {
  await api.get("/clubs/top").then(({ data }) => {
    clubs.value = data.splice(0, 10);
  });
}
getClubs();
</script>

<template>
  <div class="mainContainer flex col align-center w-100">
    <div class="container">
      <div class="title">
        <span>Welcome to</span>
        Uni Clubs
      </div>
    </div>

    <div class="news">
      <h2 class="subTitle">News</h2>
      <div>
        <h3>No news</h3>
      </div>
    </div>

    <div class="clubRelated flex sm-col m-col">
      <div class="clubs">
        <div class="titleContainer flex justify-between align-center">
          <RouterLink to="/clubs">
            <h2 class="subTitle">Top Clubs</h2>
          </RouterLink>
          <RouterLink to="/clubs"> <h4>See All Clubs</h4> </RouterLink>
        </div>

        <div class="clubCards flex col">
          <ClubCard class="clubCard" v-for="club in clubs" v-bind="club" />
        </div>
      </div>
      <div class="clubs">
        <h2 class="subTitle">Upcoming Events</h2>
        <div>
          <h3>No events</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
.title span {
  font-size: 0.7em;
  display: block;
}
.title {
  font-size: 4em;
}

.titleContainer {
  margin-bottom: 20px;
}

.subTitle {
  font-size: 25px;
}

.clubCard {
  box-sizing: unset;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}

.clubCards .clubCard:last-child {
  border: 0;
  margin: 0;
  padding: 0;
}

.reDiv {
  font-size: 20px;
}

.news {
  border: black 2px solid;
  border-radius: 10px;
  width: 75%;
  height: 600px;
  padding: 20px 30px;
}

.clubRelated {
  width: 75%;
  gap: 20px;
  margin-top: 20px;
}

.clubs {
  border: black 2px solid;
  border-radius: 10px;
  width: 50%;
  height: 550px;
  padding: 20px 30px;
  overflow-y: scroll;
}

.clubs::-webkit-scrollbar {
  display: none;
}

.eventsCards {
  align-items: center;
  width: 50%;
  padding: 30px 40px;
}

.rvspBlack {
  border: black solid 2px;
  border-radius: 10px;
  background-color: black;
  width: 290px;
  height: 140px;
  margin-top: 10px;
  padding: 20px;
}

.rvspWhite {
  border: black solid 2px;
  border-radius: 10px;
  width: 290px;
  height: 140px;
  margin-top: 10px;
  padding: 20px;
}

@media only screen and (max-width: 1024px) {
  .clubs {
    width: 100%;
  }
  .eventsCards {
    width: 100%;
    padding: 0;
  }

  .rvspBlack {
    width: 100%;
  }
  .rvspWhite {
    width: 100%;
  }
}
</style>
