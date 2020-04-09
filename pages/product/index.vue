<template>
  <div class="product-contain">
    <div class="product-title">
      <p class="title">简花</p>
      <p class="brief">从简单中发现美好</p>
    </div>
    <div class="product-list overflow-x-hidden overflow-y-scroll">
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
      <div class="product-item"></div>
    </div>
  </div>
</template>

<script>
import { getProducts } from '../../api/product'
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
  height: 161px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}
</style>
