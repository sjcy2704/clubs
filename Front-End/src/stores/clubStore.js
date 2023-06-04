import { defineStore } from "pinia";

export const useClubStore = defineStore("clubStore", {
  state: () => ({
    clubs: [],
  }),
  actions: {
    async getClubs() {
      await fetch("http://localhost:8080/clubs", {
        method: "GET",
        credentials: "include",
      }).then((res) =>
        res.json().then((json) => {
          this.clubs = json;
        })
      );
    },
    getCurrentClubs(search) {
      if (search.length === 0) {
        return this.clubs;
      }
      return this.clubs.filter(
        (club) =>
          club.name.toLowerCase().includes(search) ||
          club.short_name.toLowerCase().includes(search) ||
          club.category.toLowerCase().includes(search)
      );
    },
  },
  getters: {},
});
