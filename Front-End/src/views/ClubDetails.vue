<script setup>
defineProps({
  name: String,
  short_name: String,
  category: String,
  members: Number,
  description: String,
});
</script>

<template>
  <div class="container">
    <div class="detailsContainer flex justify-center">
      <img
        src="http://localhost:8080/user-avatars/default-user.jpg"
        class="img"
      />
      <div class="clubDetails flex col justify-between">
        <div class="main">
          <h1>{{ name || "Club Name" }}</h1>
          <h2>{{ short_name || "Short" }}</h2>
          <h3>{{ category || "Category" }}</h3>
          <h4>Total Members: {{ members || 0 }}</h4>
        </div>
        <p v-if="description" class="description">{{ description }}</p>
        <p v-else class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="flex justify-between align-center">
          <div class="socialMedia">
            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-discord" /></a>
          </div>
          <button class="joinButton">Join Club</button>
        </div>
      </div>
    </div>
    <div class="clubRelated flex sm-col justify-center">
      <div class="column">
        <h2 class="subTitle">Announcments</h2>
      </div>
      <div class="column">
        <h2 class="subTitle">Upcoming Events</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subTitle {
  font-size: 25px;
  margin-bottom: 20px;
}
.clubRelated {
  gap: 20px;
  margin-top: 50px;
}

.column {
  border: black 2px solid;
  border-radius: 10px;
  width: 650px;
  height: 700px;
  padding: 20px 30px;
  overflow-y: scroll;
}

.container {
  text-align: left;
  padding: 100px 120px 50px;
}

.detailsContainer {
  gap: 40px;
}

.img {
  width: 370px;
  height: 370px;
  border-radius: 10px;
}

.clubDetails {
  width: 55%;
}

.main {
  margin-bottom: 20px;
}

.description {
  text-align: justify;
}

.socialMedia {
  margin-top: 10px;
}

.socialMedia a {
  color: black;
  font-size: 1.75em;
  margin-right: 15px;
}

.joinButton {
  width: 50%;
}
</style>
