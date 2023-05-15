<script setup>
import FormInput from "../components/FormInput.vue";
import { useRouter } from "vue-router";
import { reactive, ref, watch, watchEffect } from "vue";
import validateAll from "../helpers/validators";

const signup = reactive({
  firstName: "",
  familyName: "",
  username: "",
  password: "",
  confirm: "",
  email: "",
  phone: "",
  manager: false,
});

const router = useRouter();

const errs = reactive({
  errors: [],
});

function createUser() {
  errs.errors = [];
  errs.errors.push(...validateAll(signup));
  if (!errs.errors) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState == 4 && req.status == 200) {
        router.push("/");
      }
    };
    req.open("POST", "http://localhost:8080/users");
    req.send(signup);
  }
}
</script>

<template>
  <div class="container">
    <p class="title">Sign Up</p>
  </div>

  <div class="lsgForm">
    <div class="flex justify-between name sm-col">
      <FormInput label="First Name" v-model="signup.firstName" />
      <FormInput label="Family Name" v-model="signup.familyName" />
    </div>
    <FormInput label="Username" v-model="signup.username" />
    <FormInput
      label="Password"
      passwordField="true"
      v-model="signup.password"
    />
    <FormInput
      label="Confirm Password"
      passwordField="true"
      v-model="signup.confirm"
    />
    <FormInput label="Email" v-model="signup.email" />
    <FormInput label="Phone Number" v-model="signup.phone" />
    <span class="errors" v-if="errs.errors" v-for="err in errs.errors">{{
      err
    }}</span>
    <button @click="createUser" type="button">Sign Up</button>
    <div class="options">
      <div v-if="!signup.manager">
        <a href="#" @click="signup.manager = true">Sign Up as a Manager</a>
      </div>
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
.errors {
  display: block;
  font-size: 0.75em;
}
</style>
