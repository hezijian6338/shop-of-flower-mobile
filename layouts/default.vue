<template>
  <div>
    <div class="contain">
      <div class="logo float-left"></div>
      <div class="avatar float-right"></div>
      <div class="main-contain">
        <div class="show-area relative">
          <nuxt />
        </div>
      </div>
      <div class="contain-button float-left"></div>
      <div class="contain-bottom float-left">
        <span>发现</span>
        <span>我的</span>
        <!-- <ul>
          <li>发现</li>
        </ul>
        <ul>
          <li>我的</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

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
  padding-left: 17px;
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

.contain-bottom > span {
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(174, 200, 187, 1);
}
</style>
