<template>
  <div class="product-contain">
    <div class="product-title">
      <p class="title">单品</p>
      <p class="brief">从简单中发现美好</p>
    </div>
    <div class="product-list overflow-x-hidden overflow-y-scroll">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-item grid grid-rows-12 gap-1"
      >
        <!-- <div class="product grid grid-rows-6 gap-1"> -->
        <div class="photo row-span-8">
          <img v-if="product.photo !== undefined" :src="product.photo" />
          <img
            v-else
            src="http://photo.dragonsking.cn/2020/04/08/736c8b2a37b86.jpg"
          />
        </div>
        <div
          v-if="product.name !== undefined"
          class="name row-span-2 text-center"
        >
          {{ product.name }}
        </div>
        <div v-else>挚爱·进口玫瑰</div>
        <div class="price row-span-2 text-center">
          {{ product.price }}
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getProductListByTagName } from '../../../api/tag'

export default {
  layout: 'default',
  // page component definitions
  async asyncData({ params, $axios }) {
    // TODO: 通过标签查询产品列表返回结果
    const { tagName } = params
    const { data: products } = await getProductListByTagName($axios, {
      tagName
    })

    // console.log(products)

    return { products }
  },
  data() {
    return {
      productInfo: {
        id: String,
        product_id: String,
        name: String,
        brief: String,
        content: String,
        sku_ids: String,
        photo: String,
        created_date: String,
        updated_date: String
      }
    }
  }
}
</script>

<style scoped>
.product-contain {
  margin: 0 auto;
  width: 16rem;
}

.product-title {
  text-align: center;
}

.product-title > .title {
  margin: 0 auto;
  width: 78px;
  height: 35px;
  font-size: 36px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.product-title > .brief {
  margin: 12px auto;
  width: 112px;
  height: 12px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}

.product-list {
  margin: 13px auto;
  width: 80vw;
  height: 75vh;
}
.product-item {
  margin-right: 27px;
  margin-bottom: 20px;
  float: left;
  width: 122px;
  min-height: 161px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.product-item > .photo {
  margin: 0 auto;
  padding-top: 14px;
  width: 80px;
}

img {
  border-radius: 10px;
}

.product-item > .name {
  /* width:83px;
height:12px; */
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(1, 1, 1, 1);
}

.product-item > .price {
  /* width: 40px;
  height: 9px; */
  font-size: 9px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(1, 1, 1, 1);
}
</style>
