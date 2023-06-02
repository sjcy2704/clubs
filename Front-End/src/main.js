import { createApp } from "vue";
import { router } from "./routes/index";
import { createPinia } from "pinia";
import piniaPersistedState from "pinia-plugin-persistedstate";
import "./style.css";
import App from "./App.vue";
import VueCookies from "vue-cookies";

const pinia = createPinia();
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUsers,
  faUser,
  faCubesStacked,
  faRightFromBracket,
  faGear,
  faBarsProgress,
  faTableColumns,
  faPlus,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUsers,
  faUser,
  faCubesStacked,
  faRightFromBracket,
  faGear,
  faBarsProgress,
  faTableColumns,
  faPlus,
  faChevronLeft,
  faFacebook,
  faInstagram,
  faTwitter,
  faDiscord
);

pinia.use(piniaPersistedState);

const app = createApp(App);
app
  .use(pinia)
  .use(router)
  .use(VueCookies)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
