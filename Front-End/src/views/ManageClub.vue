<script setup>
import DasboardCard from "../components/DashboardCard.vue";
import { useRoute, useRouter } from "vue-router";
import { api } from "../helpers/api";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();

const route = useRoute();
const router = useRouter();
const { clubID } = route.params;

await api.get(`/clubs/${clubID}/managers`).then(({ data }) => {
  console.log(data);
  if (!data.find((club) => club.manager === userStore.user.userID)) {
    router.push("/");
  }
});

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
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
</style>
