import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
    loggedIn: false,
    name: "",
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

          let name = json.firstName;
          this.name = name.charAt(0).toUpperCase() + name.slice(1);
        });
      });
    },
  },
});
