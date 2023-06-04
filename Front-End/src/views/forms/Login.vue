<script setup>
import { useRouter } from "vue-router";
import Input from "../../components/Input.vue";
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

async function logWithGoogle() {
  await fetch("http://localhost:8080/auth/google").then((res) =>
    console.log(res)
  );
}
const scr = document.createElement("script");
scr.setAttribute("src", "https://accounts.google.com/gsi/client");
document.head.appendChild(scr);
</script>

<template>
  <div class="container">
    <p class="title">Login</p>
  </div>

  <form
    class="lsgForm"
    v-on:submit.prevent="logUser(login, router, userStore, errors)"
  >
    <Input label="Username" v-model="login.username" />
    <Input label="Password" v-model="login.password" passwordField="true" />
    <span class="errors" v-if="errors.errs"
      >Username or password incorrect</span
    >
    <div
      id="g_id_onload"
      data-client_id="278035573871-ofiafg7qat39cikdsso6n4e1ppvvokee.apps.googleusercontent.com"
      data-context="signin"
      data-ux_mode="redirect"
      data-nonce=""
      data-login_uri="http://localhost:8080/auth/google"
      data-auto_prompt="false"
    ></div>

    <div
      class="g_id_signin"
      data-type="standard"
      data-shape="rectangular"
      data-theme="filled_black"
      data-text="signin_with"
      data-size="large"
      data-logo_alignment="left"
    ></div>
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
