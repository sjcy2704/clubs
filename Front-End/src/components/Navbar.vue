<script setup>
import { routes } from "../routes/index";
</script>

<template>
  <header>
    <div class="topCorner"></div>
    <div class="topDiv flex justify-between">
      <p style="color: white">Club name</p>
      <ul class="flex row sm-col justify-between nav">
        <li v-for="item in routes">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.nav {
  width: 35%;
}
</style>
