<script setup>
import { useRoute, useRouter } from "vue-router";
import { api } from "../helpers/api.js";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const events = ref([]);

await api.get(`/events/${route.params.eventID}`).then(({ data }) => {
  events.value = data[0];
});

let date = ref();
let endDate = ref();
let eventDate = ref();
let eventStartTime = ref();
let eventEndTime = ref();
let duration = ref();

date.value = new Date(events.value.starttime);
endDate.value = new Date(events.value.endtime);
eventDate.value = date.value.toLocaleDateString("en-AU");
eventStartTime.value = date.value.toLocaleTimeString("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
});
eventEndTime.value = endDate.value.toLocaleTimeString("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
});
duration.value = Math.abs(endDate.value - date.value) / 60000;

let clubName = ref("");
await api.get(`/clubs/${events.value.clubID}`).then(({ data }) => {
  clubName.value = data.name;
});
</script>

<template>
  <a class="back" @click="$router.go(-1)"
    ><font-awesome-icon
      icon="fa-solid
    fa-chevron-left"
  /></a>
  <div class="mainContainer flex col align-center w-100">
    <article class="announcementContainer">
      <div class="topDetails">
        <div class="eventHeader">
          <div class="names">
            <h1 class="clubName">{{ clubName }}</h1>
            <h2 class="title">{{ events.name }}</h2>
          </div>
          <div>
            <button>RSVP</button>
          </div>
        </div>
        <div class="details flex justify-between sm-col">
          <div>
            <p><span>Date: </span>{{ eventDate }}</p>
            <p><span>Duration: </span> {{ duration }} mins</p>
          </div>
          <div>
            <p><span>Start Time: </span>{{ eventStartTime }}</p>
            <p><span>End Time: </span>{{ eventEndTime }}</p>
          </div>
        </div>
      </div>
      <div class="content" v-html="events.description"></div>
    </article>
  </div>
</template>

<style scoped>
img {
  width: 75%;
  height: auto;
}

.eventHeader {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.names {
  grid-column: 1 / span 4;
}
.announcementContainer {
  width: 50%;
  padding: 30px;
}

.topDetails {
  margin-bottom: 30px;
}

.title {
  font-size: 2em;
}

.clubName {
  font-size: 1em;
}
.details span {
  font-weight: 600;
}
.content {
  text-align: justify;
}
.back {
  color: black;
  cursor: pointer;
  position: absolute;
  left: 7%;
  top: 15%;
  font-size: 1.5em;
}

@media only screen and (max-width: 1200px) {
  .announcementContainer {
    width: 75%;
  }
  .back {
    top: 13%;
  }
}

@media only screen and (max-width: 700px) {
  .eventHeader {
    grid-template-columns: 1fr;
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 550px) {
  .announcementContainer {
    width: 100%;
  }

  .back {
    top: 11%;
    left: 5%;
  }
}
</style>
