<template>
  <div></div>
</template>

<script>
import { getOrderById } from '../../api/order'
export default {
  async asyncData({ params, $axios }) {
    const orderId = params.id
    // TODO: 取出当前页面的订单数据
    const { data: order } = await getOrderById($axios, orderId)
    return { orderId, order }
  },
  data() {
    return {
      orderInfo: {
        id: String,
        product_id: String,
        name: String,
        sku_id: String,
        standard: String,
        price: Number,
        photo: String,
        state: Number,
        created_date: String,
        updated_date: String
      }
    }
  }
}
</script>
