<template>
  <div class="main">
    <!-- <div class="w-screen type">
      <div class="inline-block w-90 type-shop px-4">1</div>
      <div class="inline-block w-90 type-shop px-4">9</div>
      <div class="inline-block w-90 type-shop px-4">{{ ip }}</div>
    </div> -->
    <div class="product-list overflow-x-scroll overflow-y-hidden">
      <div class="product mr-3">
        <img
          class="object-center w-16 h-16 style: padding-top: 8px"
          src="~/assets/png/flower1.png"
        />
      </div>
      <div class="product mr-3">
        <img
          class="object-bottom w-16 h-16 style: padding-top: 8px"
          src="~/assets/png/flower2.png"
        />
      </div>
      <div class="product mr-3">
        <img
          class="object-bottom w-16 h-16 style: padding-top: 8px"
          src="~/assets/png/flower3.png"
        />
      </div>
      <!-- <div class="product mr-3">
        <img
          class="object-bottom style: padding-top: 8px"
          src="~/assets/png/flower1.png"
        />
      </div> -->
    </div>
    <div class="location">
      <div class="ml-4 mt-2" style="float: left;">
        <img
          style="width: 16.5px; height: 24px"
          src="~assets/png/locator.png"
        />
      </div>
      <div class="location-info ml-4">
        <span>广东省，广州市，南沙区</span>
      </div>
    </div>
    <div class="limit-list overflow-x-scroll overflow-y-hidden">
      <div class="limit-item">
        <div class="itme-photo">
          <img src="~/assets/png/limit1.png" />
        </div>
      </div>
      <div class="limit-item"></div>
      <div class="limit-item"></div>
      <div class="limit-item"></div>
      <div class="limit-item"></div>
    </div>
    <div class="current-list overflow-x-scroll overflow-y-hidden">
      <div class="current-item"></div>
      <div class="current-item"></div>
      <div class="current-item"></div>
      <div class="current-item"></div>
    </div>
  </div>
</template>

<script>
// import { getUser } from '@/api/user'

export default {
  asyncData({ $axios }) {
    // const ip = await $axios.$get('http://icanhazip.com')
    // const ip = await getUser(5)
    const ip = 5
    // console.log(userId)
    return { ip }
  }
}
</script>

<style scoped>
.main {
  margin: 0 auto;
  width: 82vw;
}

.product-list {
  /* padding-top: 86px;
  padding-left: 17px; */
  height: 91px;
  white-space: nowrap;
}

.product {
  display: inline-block;
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.product > img {
  margin: 8px auto;
}

.location {
  margin-top: 21px;
  width: 310px;
  height: 45px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 10px 10px;
}

.location-info {
  float: left;
}

.location-info > span {
  width: 130px;
  height: 12px;
  line-height: 45px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.limit-list {
  margin-top: 35px;
  white-space: nowrap;
}

.limit-item {
  margin-right: 34px;
  display: inline-block;
  width: 214px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.itme-photo {
  margin: 12px 0 12px 12px;
  width: 80px;
  height: 80px;
}

.current-list {
  margin-top: 35px;
  white-space: nowrap;
}

.current-item {
  margin-right: 34px;
  display: inline-block;
  width: 145px;
  height: 136px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}
/* .type {
  height: 90px;
}
.type-shop {
  height: 90px;
} */
</style>
