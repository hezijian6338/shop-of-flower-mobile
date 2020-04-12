<template>
  <div>
    <div class="contain">
      <div v-if="getPageIndex === 'product-id'" class="left-menu float-left">
        <span class="m2">详情</span>
        <!-- <img src="~/assets/png/info.png" class="object-bottom pl-2" /> -->
        <span class="m2">评价</span>
        <span class="m3">商品</span>
      </div>
      <div class="logo float-left">
        <img class="object-bottom pt-2" src="~/assets/png/logo2.png" />
      </div>
      <div class="avatar float-right"></div>
      <div class="main-contain">
        <div class="show-area relative">
          <nuxt />
        </div>
      </div>
      <div class="contain-button float-left" @click="pageSwitch('shop')">
        <img src="~/assets/png/index.png" />
      </div>
      <div
        v-if="getPageIndex === 'pay-id'"
        class="contain-bottom float-left"
      ></div>
      <div v-else class="contain-bottom float-left">
        <div
          class="button"
          :class="{ choose: pageInDis }"
          @click="pageSwitch('dis')"
        >
          <span>发现</span>
        </div>
        <div
          class="button"
          :class="{ choose: pageInMine }"
          @click="pageSwitch('mine')"
        >
          <span class="">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      pageInMine: false,
      pageInDis: true
    }
  },
  computed: {
    ...mapGetters({ getPageIndex: 'page/getPageIndex' })
  },
  methods: {
    pageSwitch(page) {
      if (page === 'dis') {
        this.$router.push('/dis')
        this.pageInDis = true
        this.pageInMine = false
      }
      if (page === 'mine') {
        // FIXME: 需要检查是否已经登陆
        this.$router.push('/user/5')
        this.pageInMine = true
        this.pageInDis = false
      }
      if (page === 'product') {
        this.$router.push('/product')
        this.pageInMine = false
        this.pageInDis = false
      }
      if (page === 'shop') {
        this.$router.push('/shop')
        this.pageInMine = false
        this.pageInDis = false
      }
    }
  }
}
</script>

<style scoped>
.contain {
  background: rgba(255, 255, 255, 1);
}

.left-menu {
  padding: 35vh 0 2vh 5vw;
  width: 18px;
}

.left-menu > .m2 {
  width: 12px;
  height: 23px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(174, 200, 187, 1);
}

.left-menu > .m3 {
  /* margin-top: 20px; */
  width: 12px;
  height: 23px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(174, 200, 187, 1);
}

.left-menu > img {
  width: 18px;
  height: 18px;
}

.logo {
  margin-top: 20px;
  /* margin-left: 20px; */
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
  height: 94vh;
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
