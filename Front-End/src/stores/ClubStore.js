import { defineStore } from "pinia";

export const useClubStore = defineStore("ClubStore", {
  state: () => ({
    clubs: [],
    members: 0,
  }),
  actions: {
    getClubs() {
      const request = new XMLHttpRequest();

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status === 200) {
          this.clubs = JSON.parse(request.responseText);
        }
      };

      request.open("GET", "http://localhost:8080/clubs");
      request.send();
    },
    getMembersCount() {
      const request = new XMLHttpRequest();
      this.clubs.forEach((club) => {
        let url = "http://localhost:8080/members/" + club.clubID;

        request.onreadystatechange = () => {
          if (request.readyState == 4 && request.status == 200) {
            const parsed = JSON.parse(request.responseText);
            this.members = parsed.length;
          }
        };

        request.open("GET", url);
        request.send();
      });
    },
  },
});
