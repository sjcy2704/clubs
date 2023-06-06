<script setup>
import DasboardCard from "../components/DashboardCard.vue";
import { useRoute } from "vue-router";
import { api } from "../helpers/api";
import { ref } from "vue";

const route = useRoute();
const { clubID } = route.params;

let name = ref("");

await api.get(`/clubs/${clubID}`).then(({ data }) => {
  name.value = data.name;
});
</script>

<template>
  <div class="container">
    <div class="title">Manage {{ name }}</div>
  </div>
  <div class="manageCards">
    <DasboardCard
      label="Members"
      icon="fa-solid fa-users"
      :link="'/clubs/' + clubID + '/manage/members'"
    />
    <DasboardCard
      label="Events"
      icon="fa-solid fa-calendar-days"
      :link="'/clubs/' + clubID + '/manage/events'"
    />
    <DasboardCard
      label="Announcements"
      icon="fa-solid fa-bullhorn"
      :link="'/clubs/' + clubID + '/manage/announcements'"
    />
    <DasboardCard
      label="Club Details"
      icon="fa-solid fa-info"
      :link="'/clubs/' + clubID + '/manage/details'"
    />
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5em;
  text-align: left;
}

.manageCards {
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
</style>
