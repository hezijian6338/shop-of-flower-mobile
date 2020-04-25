<template>
  <div>
    <div class="main-contain"></div>
  </div>
</template>

<script>
import { getCartsByUserId } from '../../api/cart'

export default {
  async asyncData({ $axios, params, store }) {
    // const userId = params.userId
    const userId = store.state.user.userInfo.id

    // console.log(userId)

    const carts = await getCartsByUserId($axios, userId)

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

<style scoped>
.main-contain {
  margin: 0 auto;
  width: 307px;
  height: 80vh;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}
</style>
