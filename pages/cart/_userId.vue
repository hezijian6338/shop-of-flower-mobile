<template>
  <div></div>
</template>

<script>
import { getOrdersByUserId } from '../../api/order'
export default {
  async asyncData({ params }) {
    const userId = params.userId
    const carts = await getOrdersByUserId(userId)

    return { userId, carts }
  },
  data() {
    return {
      cartInfo: {
        id: String,
        product_id: String,
        name: String,
        sku_id: String,
        standard: String,
        price: Number,
        photo: String,
        created_date: String,
        updated_date: String
      }
    }
  }
}
</script>
