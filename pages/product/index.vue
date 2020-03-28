<template>
  <div></div>
</template>

<script>
import { getProducts } from '../../api/product'
export default {
  layout: 'default',
  // page component definitions
  async asyncData() {
    // TODO: 加载所有的信息列表
    const products = await getProducts()
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
