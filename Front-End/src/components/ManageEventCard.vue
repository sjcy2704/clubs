<script setup>
const props = defineProps({
  name: String,
  starttime: String,
  endtime: String,
  disabled: Boolean,
});

const date = new Date(props.starttime);
const endDate = new Date(props.endtime);

const eventDate = date.toLocaleDateString("en-AU");
const eventStartTime = date.toLocaleTimeString("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
});
const eventEndTime = endDate.toLocaleTimeString("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
});
const duration = Math.abs(endDate - date) / 60000;
</script>

<template>
  <div class="userCard flex align-center" :class="{ disabled }">
    <div class="flex justify-between w-100 sm-col">
      <div class="userDetails">
        <h3>{{ name }}</h3>
        <div class="details flex">
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
      <div class="options flex align-center">
        <p>Edit <font-awesome-icon icon="fa-solid fa-pen-to-square" /></p>
        <a>Delete <font-awesome-icon icon="fa-solid fa-trash-can" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  gap: 40px;
}
.userCard {
  padding: 20px 0;
  border-bottom: 2px solid black;
}

.userCard:first-child {
  padding-top: 0;
}

.userCard:last-child {
  border-bottom: 0;
}

.options {
  gap: 50px;
  padding: 10px 30px;
}

.options a {
  font-size: 1em;
  font-weight: 400;
}

.newEvent {
  border-radius: 5px;
  padding: 5px 20px;
  background-color: black;
}

.disabled {
  background-color: lightgrey;
  border-bottom: 2px solid grey;
  color: grey;
}

.disabled a {
  color: grey;
}

@media only screen and (max-width: 550px) {
  .options {
    padding: 0;
  }
}
</style>
