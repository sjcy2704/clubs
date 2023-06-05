import { defineStore } from "pinia";
import { api } from "../helpers/api";

export const useClubStore = defineStore("clubStore", {
  state: () => ({
    clubs: [],
  }),
  actions: {
    async getClubs() {
      await api.get("/clubs").then(({ data }) => (this.clubs = data));
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
