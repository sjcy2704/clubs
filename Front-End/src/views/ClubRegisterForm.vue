<script setup>
import FormInput from "../components/FormInput.vue";
import { reactive, ref } from "vue";
import { useUserStore } from "../stores/userStore";
import authenticate from "../helpers/authenticate";
import { useRouter } from "vue-router";

const router = useRouter();
const logged = authenticate();
if (logged === "false") {
  router.push("/");
}

const userStore = useUserStore();
const clubDetails = reactive({
  name: "",
  short_name: "",
  category: "",
  description: "",
  manager: userStore.user.userID,
});

const categories = ref([
  { value: "Academic" },
  { value: "Arts" },
  { value: "Business" },
  { value: "Cultural" },
  { value: "Health" },
  { value: "Hobby" },
  { value: "Language" },
  { value: "Media" },
  { value: "Politics" },
  { value: "Religious" },
  { value: "Science" },
  { value: "Spiritual" },
  { value: "Sports" },
  { value: "Technology" },
]);
</script>

<template>
  <div class="container">
    <p class="title">Club<span>Registration</span></p>
  </div>
  <form class="lsgForm">
    <FormInput label="Club Name" v-model="clubDetails.name" />
    <div class="shortName">
      <FormInput label="Short Name" v-model="clubDetails.short_name" />
      <span class="example">e.g. CS Club - Computer Science Club</span>
    </div>
    <p class="category">Category</p>
    <select class="categorySelect" v-model="clubDetails.category">
      <option v-for="category in categories" :value="category.value">
        {{ category.value }}
      </option>
    </select>
    <textarea class="descriptionText" placeholder="Description"></textarea>
    <button type="submit">Create Club</button>
  </form>
</template>

<style scoped>
.title {
  font-size: 3em;
}
.title span {
  display: block;
  font-size: 0.55em;
  font-weight: 400;
}

.categorySelect {
  padding: 5px 10px;
  font-size: 1.15em;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none;
  font-family: inherit;
}

.shortName {
  position: relative;
}

.example {
  position: absolute;
  font-size: 0.75em;
  bottom: -3px;
}

.category {
  margin-top: 10px;
}

.descriptionText {
  padding: 15px;
  font-size: 1.15em;
  min-height: 200px;
  max-height: 200px;
  min-width: 100%;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none;
}
</style>
