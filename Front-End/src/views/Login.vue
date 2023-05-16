<script setup>
import { useRouter } from "vue-router";
import FormInput from "../components/FormInput.vue";
import { reactive } from "vue";

const login = reactive({
  username: "",
  password: "",
});

const router = useRouter();

function logUser() {
  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      router.push("/");
    }
  };

  req.open("POST", "http://localhost:8080/login");
  req.setRequestHeader("Content-Type", "application/json");
  req.withCredentials = true;
  req.send(JSON.stringify(login));
}
</script>

<template>
  <div class="container">
    <p class="title">Login</p>
  </div>

  <div class="lsgForm">
    <FormInput label="Username" v-model="login.username" />
    <FormInput label="Password" v-model="login.password" />
    <button type="button" @click="logUser">Login</button>
    <div class="options">
      <RouterLink to="/signup">Sign Up</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2.8em;
}
</style>
