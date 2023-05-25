<script setup>
import FormInput from "../components/FormInput.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { validateUser } from "../helpers/validators";
import { signUpUser } from "../helpers/auth";

const router = useRouter();

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

const errs = reactive({
  errors: [],
});

function createUser() {
  errs.errors = [];
  errs.errors.push(...validateUser(signup));

  if (errs.errors.length === 0) {
    signUpUser(signup, router);
  }
}
</script>

<template>
  <div class="container">
    <p class="title">Sign Up</p>
  </div>

  <form class="lsgForm" v-on:submit.prevent="createUser">
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
    <button type="submit">Sign Up</button>
    <div class="options">
      <div
        class="signUpType"
        v-if="!signup.manager"
        @click.capture="signup.manager = true"
      >
        <p>Sign Up as a Manager</p>
      </div>
      <div v-else class="signUpType" @click.capture="signup.manager = false">
        <p>Sign Up as a User</p>
      </div>
      <RouterLink to="/login">Login</RouterLink>
    </div>
  </form>
</template>

<style scoped>
.title {
  font-size: 2.8em;
}
.signUpType {
  cursor: pointer;
}

.name {
  gap: 20px;
}
.errors {
  display: block;
  font-size: 0.75em;
}
</style>
