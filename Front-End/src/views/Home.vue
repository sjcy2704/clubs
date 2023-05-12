<template>
  <div class="container">
    <div class="title">
      Welcome to <br />
      University name
    </div>
  </div>

  <div class="news">
    <h2 class="newsTitle">News</h2>
  </div>
  <div class="clubRelated flex">
    <div class="clubs">
      <h2 class="clubTitle">Log in to see your clubs!</h2>
    </div>
    <div class="eventsCards flex col justify-between align-center">
      <div class="rvspBlack">
        <div class="reDiv">
          <div class="white">Events/RVSP</div>
        </div>
      </div>

      <div class="rvspWhite">
        <div class="reDiv">
          <div>Event/RVSP</div>
        </div>
      </div>

      <div class="rvspBlack">
        <div class="reDiv">
          <div class="white">Events/RVSP</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 100px;
}

.newsTitle {
  font-size: 25px;
}

.clubTitle {
  font-size: 25px;
  text-align: center;
}

.reDiv {
  font-size: 20px;
}

.container {
  text-align: center;
  padding: 50px;
}

.news {
  text-align: left;
  border: black 2px solid;
  border-radius: 10px;
  width: 75%;
  height: 550px;
  padding: 20px;
  box-sizing: border-box;
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
  box-sizing: content-box;
}

.eventsCards {
  align-items: center;
  width: 50%;
  padding: 30px 40px;
}

.rvspBlack {
  border: black solid 1px;
  border-radius: 10px;
  background-color: black;
  width: 290px;
  height: 100px;
  margin-top: 10px;
  padding: 20px;
}

.rvspWhite {
  border: black solid 1px;
  border-radius: 10px;
  width: 290px;
  height: 100px;
  margin-top: 10px;
  padding: 20px;
}
</style>
