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
    <p class="title">login</p>
  </div>

  <div class="lsgForm">
    <FormInput label="Username" v-model="login.username" />
  </div>
</template>

<style scoped>
.title {
  font-size: 2.8em;
}
</style>
