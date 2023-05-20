import { createApp } from "vue";
import { router } from "./routes/index";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import VueCookies from "vue-cookies";

const pinia = createPinia();
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUsers, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUsers, faUser);

const app = createApp(App);
app
  .use(pinia)
  .use(router)
  .use(VueCookies)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
