<script setup>
import FormInput from "../components/FormInput.vue";
import { reactive } from "vue";

const signup = reactive({
  firstName: "",
  familyName: "",
  username: "",
  password: "",
  email: "",
  phone: "",
});
</script>

<template>
  <div class="container">
    <p class="title">Sign Up</p>
  </div>

  <div class="lsgForm">
    <div class="flex justify-between name sm-col">
      <FormInput label="First Name:" v-model="signup.firstName" />
      <FormInput label="Family Name:" v-model="signup.familyName" />
    </div>
    <FormInput label="Username:" v-model="signup.username" />
    <FormInput label="Password:" v-model="signup.password" />
    <FormInput label="Email:" v-model="signup.email" />
    <FormInput label="Phone Number:" v-model="signup.phone" />
    <button type="button">Sign Up</button>
    <div class="options">
      <a href="#">Sign Up as a Manager</a>
      <br />
      <RouterLink to="/login">Login</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2.8em;
}

.name {
  gap: 20px;
}

button {
  cursor: pointer;
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
  font-family: inherit;
  font-weight: 600;
  color: white;
}

.options {
  text-align: center;
}

.options span {
  font-weight: 900;
}

.options a {
  font-weight: 400;
  font-size: 0.9em;
  color: black;
}
</style>
