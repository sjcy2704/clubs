<script setup>
import { useRouter } from "vue-router";
import FormInput from "../../components/FormInput.vue";
import { reactive } from "vue";
import { logUser } from "../../helpers/auth";
import { useUserStore } from "../../stores/userStore";

const router = useRouter();

const login = reactive({
  username: "",
  password: "",
});

const errors = reactive({
  errs: false,
});

const userStore = useUserStore();
</script>

<template>
  <div class="container">
    <p class="title">Login</p>
  </div>

  <form
    class="lsgForm"
    v-on:submit.prevent="logUser(login, router, userStore, errors)"
  >
    <FormInput label="Username" v-model="login.username" />
    <FormInput label="Password" v-model="login.password" passwordField="true" />
    <span class="errors" v-if="errors.errs"
      >Username or password incorrect</span
    >
    <button type="submit">Login</button>
    <div class="options">
      <RouterLink to="/signup">Sign Up</RouterLink>
    </div>
  </form>
</template>

<style scoped>
.title {
  font-size: 2.8em;
}
.errors {
  display: block;
  font-size: 0.75em;
}
</style>
