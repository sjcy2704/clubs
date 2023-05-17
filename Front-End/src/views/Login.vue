<script setup>
import { useRouter } from "vue-router";
import FormInput from "../components/FormInput.vue";
import { reactive, inject } from "vue";
import { logUser } from "../helpers/auth";

const login = reactive({
  username: "",
  password: "",
});

const router = useRouter();

const $cookies = inject("$cookies");
if ($cookies.get("sessionid")) {
  router.push("/");
}
</script>

<template>
  <div class="container">
    <p class="title">Login</p>
  </div>

  <form class="lsgForm" v-on:submit.prevent="logUser(login, router)">
    <FormInput label="Username" v-model="login.username" />
    <FormInput label="Password" v-model="login.password" passwordField="true" />
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
</style>
