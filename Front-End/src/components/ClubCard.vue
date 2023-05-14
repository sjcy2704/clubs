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
      <div class="clubDetails">
        <p class="name">{{ name }}</p>
        <p class="category">{{ category }}</p>
      </div>
      <div class="members flex">
        <p class="membersCount">{{ members }}</p>
        <font-awesome-icon class="memberIcon" icon="fa-solid fa-users" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.clubContainer {
  width: 250px;
}

.clubDetails {
  width: 55%;
}

.details {
  text-align: left;
  padding: 10px 0;
}

.members {
  margin-right: 10px;
}

.membersCount {
  margin-right: 5px;
}

.memberIcon {
  padding-top: 5px;
}

.category {
  font-size: 0.85em;
}

.clubIcon {
  border: black 2px solid;
  border-radius: 10px;
  width: 250px;
  height: 250px;
}
</style>
