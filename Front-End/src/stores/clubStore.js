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
    getCurrentClubs(search, filter) {
      if (search === "" && filter === "") {
        return this.clubs;
      }

      search = search.toLowerCase();
      return this.clubs.filter((club) => {
        if (search === "" && filter !== "") {
          return club.category === filter;
        } else if (search !== "" && filter === "") {
          return (
            club.name.toLowerCase().includes(search) ||
            club.short_name.toLowerCase().includes(search) ||
            club.category.toLowerCase().includes(search)
          );
        }

        return (
          club.name.toLowerCase().includes(search) ||
          club.short_name.toLowerCase().includes(search) ||
          club.category.toLowerCase().includes(search) ||
          club.category === filter
        );
      });
    },
    getName(id) {
      this.clubs.forEach((club) => {
        if (club.clubID === id) {
          console.log(club);
          return club.name;
        }
      });
    },
  },
});
