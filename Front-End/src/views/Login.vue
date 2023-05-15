<script setup>
import FormInput from "../components/FormInput.vue";
import { reactive } from "vue";

const login = reactive({
  username: "",
  password: "",
});
</script>

<template>
  <div class="container">
    <p class="title">Login</p>
  </div>

  <div class="lsgForm">
    <FormInput label="Username" v-model="login.username" />
    <FormInput label="Password" v-model="login.password" />
    <button type="button">Login</button>
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
