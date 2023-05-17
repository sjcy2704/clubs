import { defineStore } from "pinia";

export const useClubStore = defineStore("ClubStore", {
  state: () => ({
    clubs: [],
  }),
  actions: {
    getClubs() {
      const request = new XMLHttpRequest();

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status === 200) {
          console.log(JSON.parse(request.responseText));
          this.clubs = JSON.parse(request.responseText);
        }
      };

      request.open("GET", "http://localhost:8080/clubs");
      request.send();
    },
  },
});
