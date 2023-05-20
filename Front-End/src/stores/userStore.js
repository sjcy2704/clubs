import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
    loggedIn: false,
    username: "",
  }),
  actions: {
    async getUser() {
      await fetch("http://localhost:8080/user", {
        method: "GET",
        credentials: "include",
      }).then((res) => {
        res.json().then((json) => {
          this.user = json;
          this.loggedIn = true;

          let username = json.username;
          this.username = username.charAt(0).toUpperCase() + username.slice(1);
        });
      });
    },
  },
});
