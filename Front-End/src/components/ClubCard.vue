<script setup>
defineProps({
  name: String,
  category: String,
  members: Number,
});
</script>

<template>
  <div class="clubContainer">
    <div class="clubIcon"></div>
    <div class="details flex justify-between">
      <div>
        <p class="name">{{ name }}</p>
        <p class="category">{{ category }}</p>
      </div>
      <div>
        <p class="members">{{ members }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  text-align: left;
  padding: 10px 0;
}

.category {
  font-size: 0.85em;
}

.clubIcon {
  border: black 2px solid;
  width: 250px;
  height: 250px;
}
</style>
