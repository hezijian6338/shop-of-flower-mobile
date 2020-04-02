<template>
  <div>
    <div class="contain">
      <div class="logo float-left">
        <img class="object-bottom pt-2" src="~/assets/png/logo2.png" />
      </div>
      <div class="avatar float-right"></div>
      <div class="main-contain">
        <div class="show-area relative">
          <nuxt />
        </div>
      </div>
      <div class="contain-button float-left">
        <img src="~/assets/png/index.png" />
      </div>
      <div class="contain-bottom float-left">
        <div class="button" :class="{ choose: pageInDis }">
          <span>发现</span>
        </div>
        <div class="button" :class="{ choose: pageInMine }">
          <span class="">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageInMine: true,
      pageInDis: false
    }
  }
}
</script>

<style scoped>
.contain {
  background: rgba(255, 255, 255, 1);
}

.logo {
  margin-top: 20px;
  margin-left: 20px;
  width: 132px;
  height: 42px;
  background: rgba(255, 255, 255, 1);
  border-radius: 18px 18px 18px 24px;
}

.avatar {
  margin-top: 16px;
  margin-right: 13px;
  width: 48px;
  height: 48px;
  border: 3px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
}

.show-area {
  padding-top: 86px;
  /* padding-left: 17px; */
}

.main-contain {
  margin-left: 49px;
  /* padding-bottom: 50px; */
  width: 326px;
  height: 94vh;
  background: rgba(211, 227, 229, 1);
  border-radius: 0px 0px 0px 25px;
}

.contain-button {
  margin-left: 12px;
  width: 38px;
  height: 38px;
  background: rgba(243, 173, 173, 1);
  border-radius: 10px;
}

.contain-bottom {
  width: 325px;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
}

/* .contain-bottom > span {
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(174, 200, 187, 1);
} */

.button {
  margin-top: 10px;
  display: inline-block;
  width: 101px;
  height: 3vh;
  line-height: 3vh;
  border-radius: 10px;
}

.button > span {
  margin: 0 auto;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(174, 200, 187, 1);
}

.choose {
  background: rgba(211, 227, 229, 1);
}

.choose > span {
  width: 35px;
  height: 17px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
</style>
