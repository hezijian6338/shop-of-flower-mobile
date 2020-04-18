<template>
  <div class="main">
    <div class="product-list overflow-x-scroll overflow-y-hidden">
      <div class="product mr-3" @click="toTagPage('single')">
        <img
          class="object-center w-16 h-16 style: padding-top: 8px"
          src="~/assets/png/flower1.png"
        />
        <span>单品花束</span>
      </div>
      <div class="product mr-3" @click="toTagPage('mix')">
        <img
          class="object-bottom w-16 h-16 style: padding-top: 8px"
          src="~/assets/png/flower2.png"
        />
        <span>混合花束</span>
      </div>
      <div class="product mr-3" @click="toTagPage('nature')">
        <img
          class="object-bottom w-16 h-16 style: padding-top: 8px"
          src="~/assets/png/flower3.png"
        />
        <span>绿植多肉</span>
      </div>
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
      <div
        v-for="limit in productsLimit"
        :key="limit.id"
        class="limit-item"
        @click="toPageInfo(limit.product_id)"
      >
        <div class="grid grid-cols-8">
          <div class="item-photo col-span-4">
            <img
              v-if="limit.photo !== undefined"
              :src="limit.photo"
              class="object-contain"
            />
            <img v-else src="~/assets/png/limit1.png" />
          </div>
          <div class="text-center col-start-5 col-span-4 grid grid-rows-6">
            <div class="item-name row-start-3">
              <span v-if="limit.name !== undefined">{{ limit.name }}</span>
              <span v-else>呆萌精灵-泰迪菊 10 枝</span>
            </div>
            <div class="item-price row-start-4">
              <span v-if="limit.price !== undefined">¥{{ limit.price }}</span>
              <span v-else>¥25.90</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="limit-item"></div>
      <div class="limit-item"></div>
      <div class="limit-item"></div>
      <div class="limit-item"></div> -->
    </div>
    <div class="current-list overflow-x-scroll overflow-y-hidden">
      <div class="current-item">
        <div class="current-item-photo">
          <img src="~/assets/png/current.png" />
        </div>
        <div class="current-item-name">
          <p>「清溪」初春元气主题花</p>
        </div>
        <div class="current-item-price">
          <p>¥49.00</p>
        </div>
      </div>
      <div class="current-item"></div>
      <div class="current-item"></div>
      <div class="current-item"></div>
      <div class="current-item"></div>
    </div>
  </div>
</template>

<script>
import { getTagList, getProductListByTagName } from '@/api/tag'

export default {
  async asyncData({ params, $axios }) {
    // 标签列表
    const { data: tagList } = await getTagList($axios)

    // 限时产品加载
    const { data: productsLimit } = await getProductListByTagName($axios, {
      tagName: 'limit'
    })

    return { tagList, productsLimit }
  },
  methods: {
    toTagPage(tagName) {
      this.$router.push('/product/tag/' + tagName)
    },
    toPageInfo(productId) {
      this.$router.push('/product/' + productId)
    }
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
  /* height: 91px; */
  white-space: nowrap;
}

.product {
  display: inline-block;
  width: 90px;
  height: 90px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.product > img {
  margin: 5px auto 0;
  width: 48.5px;
  height: 48.5px;
}

.product > span {
  margin: 0 auto;
  width: 47px;
  height: 12px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
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
  min-height: 149px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.item-photo {
  /* margin: 12px 0 12px 12px; */
  min-height: 149px;
  /* float: left; */
  /* width: 80px; */
  /* height: 80px; */
}

.item-photo > img {
  margin: 10px 0 10px 10px;
  /* max-height: 83px; */
  /* max-width: 83px; */
}

.item-name {
  /* margin-top: 30px; */
  /* margin-left: 20px; */
  /* float: left; */
}

.item-name > span {
  /* width: 92px; */
  /* height: 10px; */
  font-size: 9px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(58, 57, 57, 1);
}

.item-price {
  /* width: 120px; */
  /* float: left; */
  /* text-align: center; */
}

.item-price > span {
  /* width: 24px; */
  /* height: 7px; */
  font-size: 8px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 0, 0, 1);
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

.current-item-photo {
  margin: 7px auto 2px;
  width: 93px;
  height: 93px;
}

.current-item-name > p {
  margin: 0 auto;
  width: 135px;
  height: 9px;
  font-size: 9px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(58, 57, 57, 1);
}

.current-item-price {
  margin: 7px auto 2px;
}

.current-item-price > p {
  margin: 0 auto;
  width: 40px;
  height: 7px;
  font-size: 8px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(194, 191, 191, 1);
}

/* .type {
  height: 90px;
}
.type-shop {
  height: 90px;
} */
</style>
