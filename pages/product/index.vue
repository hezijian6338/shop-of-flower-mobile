<template>
  <div class="product-contain">
    <div class="product-title">
      <p class="title">简花</p>
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
        <!-- <div class="price row-span-2 text-center">
          {{ getProductSku(product.skuIds) }}
        </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from '../../api/product'
import { getSkuById } from '../../api/sku'
export default {
  layout: 'default',
  // page component definitions
  async asyncData({ $axios }) {
    // TODO: 加载所有的信息列表
    const { data: products } = await getProducts($axios)
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
  },
  computed: {
    getProductSku() {
      return async function(skuids) {
        let skuIds = []

        // TODO: 分割规格为数组, 准备给页面构建
        skuIds = (skuids || '').split(',')

        // 遍历 skuIds, 查询数据库
        // for (const skuId of skuIds) {
        // 取出 sku信息
        const { data: sku } = await getSkuById(this.$axios, skuIds[0])
        // this.sku = sku
        // 判断 sku是否为空...
        // if (sku !== null) {
        // this.skus.push(sku)
        // }
        // }
        console.log(sku)

        return sku || sku.price
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

.product {
  /* margin: 0 auto; */
}

.product-item > .photo {
  margin: 0 auto;
  padding-top: 14px;
  width: 80px;
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
