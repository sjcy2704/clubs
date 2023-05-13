<script setup>
import ClubCard from "../components/ClubCard.vue";
</script>
<template>
  <div class="container">
    <div class="title">Clubs</div>
  </div>

  <div class="cardsContainer flex flex-wrap">
    <ClubCard v-for="n in 20" name="Club" category="Fitness" members="10" />
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5em;
}

.cardsContainer {
  gap: 40px;
  width: 60%;
  margin: 0 auto;
}
</style>
