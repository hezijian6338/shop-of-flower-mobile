<template>
  <div></div>
</template>

<script>
import { getOrdersByUserId } from '../../api/order'
export default {
  async asyncData({ params, $axios }) {
    const userId = params.userId
    // TODO: 根据用户 id返回该用户的订单信息列表
    const { data: orders } = await getOrdersByUserId($axios, userId)

    return { userId, orders }
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
      },
      orderList: Array
    }
  },
  methods: {
    toPageOrder(orderId) {
      this.$router.push('/order/' + orderId)
    }
  }
}
</script>
