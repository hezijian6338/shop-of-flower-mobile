<template>
  <div class="main">
    <!-- <div class="w-screen type">
      <div class="inline-block w-90 type-shop px-4">1</div>
      <div class="inline-block w-90 type-shop px-4">9</div>
      <div class="inline-block w-90 type-shop px-4">{{ ip }}</div>
    </div> -->
    <div class="product-list overflow-x-scroll overflow-y-hidden">
      <div class="product mr-3"></div>
      <div class="product mr-3"></div>
      <div class="product mr-3"></div>
      <div class="product mr-3"></div>
    </div>
    <div class="location">
      <span>广东省，广州市，南沙区</span>
    </div>
    <div class="limit-list overflow-x-scroll overflow-y-hidden">
      <div class="limit-item"></div>
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

.location {
  margin-top: 21px;
  width: 310px;
  height: 45px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 10px 10px;
}

.location > span {
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
