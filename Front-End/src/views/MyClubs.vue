<script setup>
import ViewClubs from "../components/ViewClubs.vue";
import { useUserStore } from "../stores/userStore";
import { ref, watchEffect } from "vue";
import { api } from "../helpers/api";
import Pagination from "../components/Pagination.vue";

const userStore = useUserStore();

let allClubs = ref([]);
let pageCount = ref(0);
let currentPage = ref(1);
let category = ref("");
let prevCategory = ref("");

await api.get(`/users/${userStore.user.userID}/clubs`).then(({ data }) => {
  pageCount.value = data.pageCount;
  allClubs.value = data.data;
});

function onPageChange(page) {
  currentPage.value = page;
}

function onChangeCategory(cat) {
  prevCategory.value = category.value;
  category.value = cat;
}

watchEffect(async () => {
  let path = `/users/${userStore.user.userID}/clubs?page=${currentPage.value}&limit=16`;
  if (category.value !== "") {
    path = `/users/${userStore.user.userID}/clubs?page=${currentPage.value}&category=${category.value}&limit=16`;
  }

  await api.get(path).then(({ data }) => {
    allClubs.value = data.data;
    pageCount.value = data.pageCount;
  });
});
</script>

<template>
  <ViewClubs
    @changecategory="onChangeCategory"
    v-model="allClubs"
    label="My Clubs"
  >
    <Pagination
      :current-page="currentPage"
      :page-count="pageCount"
      @changepage="onPageChange"
    />
  </ViewClubs>
</template>
