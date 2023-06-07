<script setup>
import { useRouter } from "vue-router";
import { api } from "../helpers/api";

const router = useRouter();
const props = defineProps({
  firstName: String,
  familyName: String,
  userID: Number,
  clubID: Number,
  role: String,
  gender: String,
  currManager: Boolean,
});

const genderValues = {
  M: "Male",
  F: "Female",
  NB: "Non-binary",
};

async function removeMember() {
  await api
    .post("/members/remove", { clubID: props.clubID, userID: props.userID })
    .then(() => {
      router.go();
    });
}
</script>

<template>
  <div class="userCard flex align-center">
    <img
      src="http://localhost:8080/user-avatars/default-user.jpg"
      class="profilePic"
    />
    <div class="flex justify-between w-100 sm-col">
      <div class="userDetails">
        <h3>{{ props.firstName + " " + props.familyName }}</h3>
        <p>User ID: {{ props.userID }}</p>
        <p>Role: {{ role }}</p>
        <p v-if="props.gender">Gender: {{ genderValues[props.gender] }}</p>
      </div>
      <div v-if="!props.currManager" class="options flex align-center">
        <p>View <font-awesome-icon icon="fa-solid fa-pen-to-square" /></p>
        <a @click="removeMember"
          >Remove <font-awesome-icon icon="fa-solid fa-user-minus"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.userCard {
  padding: 20px 0;
  border-bottom: 2px solid black;
}

.userCard:first-child {
  padding-top: 0;
}

.userCard:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.options {
  gap: 50px;
  padding: 10px 30px;
}

.options a {
  font-size: 1em;
  font-weight: 400;
}

.profilePic {
  width: 80px;
  height: 80px;
  background-color: black;
  margin-right: 20px;
}

@media only screen and (max-width: 550px) {
  .options {
    padding: 0;
  }
}
</style>
