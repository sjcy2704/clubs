<script setup>
defineProps({
  clubID: Number,
  short_name: String,
  category: String,
  members: Number,
  logo: String,
  manage: Boolean,
  name: String,
});
</script>

<template>
  <div class="clubContainer">
    <RouterLink
      :to="
        manage ? { name: 'ManageClub', params: { clubID } } : '/clubs/' + clubID
      "
    >
      <img :src="logo" class="clubIcon" />
    </RouterLink>
    <div class="details flex justify-between">
      <div class="clubDetails">
        <RouterLink
          :to="
            manage
              ? { name: 'ManageClub', params: { clubID }, state: { name } }
              : '/clubs/' + clubID
          "
        >
          <p class="name">{{ short_name }}</p>
        </RouterLink>
        <RouterLink
          :to="
            manage
              ? { name: 'ManageClub', params: { clubID } }
              : '/clubs/' + clubID
          "
        >
          <p class="category">{{ category }}</p>
        </RouterLink>
      </div>
      <div class="members flex">
        <p class="membersCount">{{ members }}</p>
        <font-awesome-icon class="memberIcon" icon="fa-solid fa-users" />
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
}
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
