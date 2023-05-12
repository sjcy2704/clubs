<script setup>
const navRoutes = [
  { name: "Home", path: "/" },
  { name: "Clubs", path: "/clubs" },
  { name: "Sign Up", path: "/signup" },
  { name: "Login", path: "/login" },
];
</script>

<template>
  <header>
    <div class="topCorner"></div>
    <div class="topDiv flex justify-between">
      <p style="color: white">Club name</p>
      <ul class="flex row sm-col justify-between nav">
        <li v-for="item in navRoutes">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.nav {
  width: 20%;
}
</style>
