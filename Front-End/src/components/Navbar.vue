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

.topDiv {
  background-color: black;
  padding: 20px 100px;
}

.topCorner {
  box-sizing: content-box;
  border-top: 80px solid black;
  border-right: 100px solid transparent;
  height: 0;
  width: 125px;
  top: 0;
  position: absolute;
  z-index: -1;
}

@media only screen and (max-width: 550px) {
  .topDiv {
    padding: 15px 20px;
  }

  .topCorner {
    border-top: 70px solid black;
    border-right: 50px solid transparent;
  }
}
</style>
