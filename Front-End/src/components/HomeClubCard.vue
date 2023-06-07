<script setup>
defineProps({
  clubID: Number,
  name: String,
  short_name: String,
  category: String,
  members: Number,
  logo: String,
});
</script>
<template>
  <RouterLink :to="/clubs/ + clubID" class="card flex">
    <img :src="logo" class="img" />
    <div class="clubDetails flex col justify-between">
      <div class="name">
        <p class="clubName">{{ name }}</p>
        <p class="subName">{{ short_name }}</p>
      </div>
      <div class="subDetails flex justify-between">
        <p class="category">{{ category }}</p>
        <p class="membersCount">
          {{ members }}
          <font-awesome-icon
            icon="fa-solid
          fa-users"
          />
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  height: 100px;
  width: 100%;
}

.img {
  border-radius: 5px;
  max-height: 100px;
  max-width: 100px;
}

.clubDetails {
  text-align: left;
  flex-grow: 1;
  padding: 0px 20px;
}

.clubName {
  font-size: 1.15em;
}

.subName {
  font-size: 0.95em;
  margin-bottom: 5px;
}

.subDetails {
  width: 100%;
  font-size: 0.95em;
}

@media only screen and (max-width: 1430px) {
  .name {
    font-size: 0.9em;
  }
  .category {
    font-size: 0.9em;
  }
}

@media only screen and (max-width: 700px) {
  .membersCount {
    display: none;
  }
  .name {
    font-size: 0.8em;
  }
  .category {
    font-size: 0.8em;
  }
}

@media only screen and (max-width: 550px) {
  .clubDetails {
    justify-content: start;
  }
}
</style>
