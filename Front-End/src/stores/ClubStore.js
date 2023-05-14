import { defineStore } from "pinia";

export const useClubStore = defineStore("ClubStore", {
  state: () => ({
    clubs: [],
    members: [],
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
    // getMembersCount() {
    //   this.clubs.forEach((club, index) => {
    //     const request = new XMLHttpRequest();
    //     let url = "http://localhost:8080/members/" + club.clubID;

    //     request.onreadystatechange = () => {
    //       if (request.readyState == 4 && request.status == 200) {
    //         const parsed = JSON.parse(request.responseText);
    //         const obj = { clubID: club.clubID, members: parsed.length };

    //         this.members.push(obj);
    //       }
    //     };

    //     request.open("GET", url);
    //     request.send();
    //   });
    // },
    // mapMembersCount() {
    //   this.clubs = this.clubs.map((club, i) => {
    //     let temp = this.members.find((el) => el.clubID === club.clubID);

    //     if (temp && temp.members) {
    //       this.clubs[i]["members"] = temp.members;
    //     }
    //     return club;
    //   });
    // },
  },
});
