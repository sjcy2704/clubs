import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
    loggedIn: false,
  }),
  actions: {
    async getUser() {
      await fetch("http://localhost:8080/user", {
        method: "GET",
        credentials: "include",
      }).then((res) => {
        res.json().then((json) => {
          if (json.userID) {
            this.user = json;
            this.loggedIn = true;
          } else {
            this.user = {};
            this.loggedIn = false;
          }
        });
      });
    },
  },
  persist: {
    storage: localStorage,
    beforeRestore: (ctx) => {
      ctx.store.getUser();
    },
  },
});
