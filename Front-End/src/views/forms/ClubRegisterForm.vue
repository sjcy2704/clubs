<script setup>
import Input from "../../components/Input.vue";
import { reactive, ref } from "vue";
import { useUserStore } from "../../stores/userStore";
import { useRouter } from "vue-router";
import { validateClub } from "../../helpers/validators";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Dropzone from "../../components/Dropzone.vue";
import { api } from "../../helpers/api";

const userStore = useUserStore();
const clubDetails = reactive({
  name: "",
  short_name: "",
  category: "",
  logo: null,
  description: "",
  facebook: "",
  twitter: "",
  instagram: "",
  discord: "",
  manager: userStore.user.userID,
});

const categories = ref([
  { value: "Academic" },
  { value: "Arts" },
  { value: "Business" },
  { value: "Cultural" },
  { value: "Faith & Religion" },
  { value: "Health" },
  { value: "Hobbies" },
  { value: "Language" },
  { value: "Media" },
  { value: "Politics" },
  { value: "Science" },
  { value: "Sports" },
  { value: "Technology" },
]);

const router = useRouter();

async function registerClub() {
  const formData = new FormData();
  for (const key in clubDetails) {
    if (key === "logo" && clubDetails[key]) {
      formData.append(key, clubDetails[key][0]);
    } else {
      formData.append(key, clubDetails[key]);
    }
  }

  await api.post("/clubs", formData).then(() => router.push("/clubs/manage"));
}

const errs = reactive({
  errors: [],
});

let showSocialLinks = ref(false);

function addClub() {
  errs.errors = validateClub(clubDetails);

  if (errs.errors.length === 0) {
    registerClub();
  }
}
</script>

<template>
  <a class="back" @click="$router.go(-1)"
    ><font-awesome-icon
      icon="fa-solid
    fa-chevron-left"
  /></a>
  <div class="mainContainer flex col align-center">
    <div class="container">
      <p class="title">Club<span>Registration</span></p>
    </div>
    <form class="lsgForm registerForm" v-on:submit.prevent="addClub">
      <Input label="Club Name" v-model="clubDetails.name" required="true" />
      <div class="shortName">
        <Input
          label="Short Name"
          v-model="clubDetails.short_name"
          required="true"
        />
        <span class="example">e.g. CS Club - Computer Science Club</span>
      </div>

      <p class="category">Category</p>
      <select class="categorySelect" v-model="clubDetails.category" required>
        <option v-for="category in categories" :value="category.value">
          {{ category.value }}
        </option>
      </select>
      {{ clubDetails.description }}
      <Dropzone label="Club Logo" v-model="clubDetails.logo" />
      <p class="descLabel">Description</p>
      <QuillEditor
        v-model:content="clubDetails.description"
        contentType="html"
      />
      <div class="socialLinks">
        <a
          class="showlinks"
          v-if="!showSocialLinks"
          @click="showSocialLinks = true"
          >Add Social Links</a
        >
        <div v-else="showSocialLinks" class="socialLinksInputs">
          <Input label="Facebook" v-model="clubDetails.facebook" />
          <Input label="Twitter" v-model="clubDetails.twitter" />
          <Input label="Instagram" v-model="clubDetails.instagram" />
          <Input label="Discord" v-model="clubDetails.discord" />
        </div>
      </div>

      <button type="submit">Create Club</button>
    </form>
  </div>
</template>

<style scoped>
.showlinks {
  color: black;
  font-weight: 400;
  cursor: pointer;
}

.socialLinks {
  margin-top: 15px;
}

.descLabel {
  margin-top: 10px;
}

.registerForm {
  max-width: 500px;
}
.title {
  font-size: 3em;
}
.title span {
  display: block;
  font-size: 0.55em;
  font-weight: 400;
}

.back {
  color: black;
  cursor: pointer;
  position: absolute;
  left: 10%;
  top: 15%;
  font-size: 1.5em;
}

.categorySelect {
  font-size: 1.15em;
  margin-bottom: 15px;
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
</style>
