<template>
  <div class="container">
    <div class="detailsContainer flex justify-center">
      <img
        src="http://localhost:8080/user-avatars/default-user.jpg"
        class="img"
      />
      <div class="clubDetails">
        <div class="main">
          <h1>Adelaide University Volleyball Club</h1>
          <h2>AUVC</h2>
          <h3>Sports</h3>
          <h4>Total Members: 20</h4>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="socialMedia">
          <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-discord" /></a>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.container {
  text-align: left;
  padding: 0 150px;
}

.detailsContainer {
  gap: 40px;
}

.img {
  width: 350px;
  height: 350px;
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
</style>
