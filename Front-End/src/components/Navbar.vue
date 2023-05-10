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
  <ul class="flex row justify-between">
    <li v-for="item in nav">
      <a :href="item.path">{{ item.title }}</a>
    </li>
  </ul>
</template>
