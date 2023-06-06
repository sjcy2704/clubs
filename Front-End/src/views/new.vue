<script setup>
import DasboardCard from "../components/DashboardCard.vue";
import { useRoute, useRouter } from "vue-router";
import { api } from "../helpers/api";

const route = useRoute();
const router = useRouter();

const { clubID } = route.params;

let name;
await api.get(`/clubs/${clubID}`).then(({ data }) => (name = data.name));
</script>

<template>
  <div class="flex col align-center">
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
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5em;
  text-align: left;
}

.manageCards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
</style>
