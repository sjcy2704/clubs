<script setup>
const nav = [
  { title: "Home", path: "/" },
  { title: "Clubs", path: "/clubs" },
  { title: "Memberships", path: "#" },
  { title: "Sign Up", path: "/signup" },
  { title: "Login", path: "/login" },
];
</script>

<template>
  <header>
    <div class="topCorner"></div>
    <div class="topDiv flex justify-between">
      <p style="color: white">Club name</p>
      <ul class="flex row justify-between nav">
        <li v-for="item in nav">
          <RouterLink :to="item.path">{{ item.title }}</RouterLink>
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
