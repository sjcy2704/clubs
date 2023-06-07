<script setup>
import Input from "../../components/Input.vue";
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { api } from "../../helpers/api";

const route = useRoute();

const eventDetails = reactive({
  name: "",
  description: "",
  starttime: null,
  endtime: null,
  rsvpLimit: null,
  clubID: route.params.clubID,
});

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setMinutes(tomorrow.getMinutes() - tomorrow.getTimezoneOffset());
eventDetails.starttime = tomorrow.toISOString().slice(0, 16);
eventDetails.endtime = eventDetails.starttime;

const router = useRouter();

async function addEvent() {
  eventDetails.starttime = new Date(eventDetails.starttime)
    .toJSON()
    .slice(0, 16);
  console.log(eventDetails.starttime);
  eventDetails.endtime = new Date(eventDetails.endtime).toJSON().slice(0, 16);
  await api.post("/events", eventDetails).then(() => router.go(-1));
}

let rsvp = ref(false);
function setRSVP() {
  if (rsvp.value === false) {
    eventDetails.rsvpLimit = 0;
    rsvp.value = true;
  } else {
    eventDetails.rsvpLimit = null;
    rsvp.value = false;
  }
}

const errs = reactive({
  errors: [],
});
</script>

<template>
  <a class="back" @click="$router.go(-1)"
    ><font-awesome-icon
      icon="fa-solid
    fa-chevron-left"
  /></a>
  <div class="container">
    <p class="title">New Event</p>
  </div>
  <form class="lsgForm registerForm" v-on:submit.prevent="addEvent">
    <Input label="Club Name" v-model="eventDetails.name" required="true" />
    <p class="category">Start Time</p>
    <input
      type="datetime-local"
      v-model="eventDetails.starttime"
      :min="tomorrow"
    />
    <p class="category">End Time</p>
    <input
      type="datetime-local"
      v-model="eventDetails.endtime"
      :min="eventDetails.starttime"
    />
    <a class="setRSVP" @click="setRSVP"
      >{{ rsvp ? "Remove" : "Set" }} RSVP Limit</a
    >
    <input
      class="rsvpLimit"
      v-if="rsvp"
      type="number"
      min="0"
      v-model="eventDetails.rsvpLimit"
    />
    <p class="descLabel">Description</p>
    <QuillEditor
      v-model:content="eventDetails.description"
      contentType="html"
    />

    <button type="submit">Add Event</button>
  </form>
</template>

<style scoped>
.rsvpLimit {
  width: 100%;
}

.setRSVP {
  color: black;
  font-weight: 400;
}

.descLabel {
  margin-top: 10px;
}

.title {
  font-size: 3em;
}
.title span {
  display: block;
  font-size: 0.55em;
  font-weight: 400;
}

.back {
  color: black;
  cursor: pointer;
  position: absolute;
  left: 10%;
  top: 15%;
  font-size: 1.5em;
}
</style>
