<template>
  <div class="container center">
    <div class="title">
      <span>Welcome to</span>
      Uni Clubs
    </div>
  </div>

  <div class="news center">
    <h2 class="subTitle">News</h2>
  </div>
  <div class="clubRelated center">
    <div class="flex">
      <div class="clubs">
        <h2 class="subTitle">Clubs</h2>
      </div>
      <div class="eventsCards flex col justify-between align-center">
        <div class="rvspBlack">
          <div class="reDiv">
            <div class="white">Events</div>
          </div>
        </div>

        <div class="rvspWhite">
          <div class="reDiv">
            <div>Event</div>
          </div>
        </div>

        <div class="rvspBlack">
          <div class="reDiv">
            <div class="white">Events</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title span {
  font-size: 0.7em;
  display: block;
}
.title {
  font-size: 4em;
}

.subTitle {
  font-size: 25px;
}

.reDiv {
  font-size: 20px;
}

.news {
  border: black 2px solid;
  border-radius: 10px;
  width: 75%;
  height: 550px;
  padding: 20px;
}

.clubRelated {
  width: 75%;
}

.clubs {
  border: black 2px solid;
  border-radius: 10px;
  width: 50%;
  height: 550px;
  margin-top: 10px;
  padding: 20px;
}

.eventsCards {
  align-items: center;
  width: 50%;
  padding: 30px 40px;
}

.rvspBlack {
  border: black solid 2px;
  border-radius: 10px;
  background-color: black;
  width: 290px;
  height: 140px;
  margin-top: 10px;
  padding: 20px;
}

.rvspWhite {
  border: black solid 2px;
  border-radius: 10px;
  width: 290px;
  height: 140px;
  margin-top: 10px;
  padding: 20px;
}

@media only screen and (max-width: 550px) {
  .clubs {
    width: 100%;
  }
  .eventsCards {
    width: 100%;
    padding: 0;
  }

  .rvspBlack {
    width: 100%;
  }
  .rvspWhite {
    width: 100%;
  }
}
</style>
