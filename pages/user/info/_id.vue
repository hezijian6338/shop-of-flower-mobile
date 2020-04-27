<template>
  <van-tabs v-model="index" color="#000000">
    <van-tab title="全部"><orderList :orders="all"/></van-tab>
    <van-tab title="待付款" name="0"><orderList :orders="wait2pay"/></van-tab>
    <van-tab title="待发货" name="1"
      ><orderList :orders="wait2deliver"
    /></van-tab>
    <van-tab title="已发货" name="2"><orderList :orders="deliver"/></van-tab>
  </van-tabs>
</template>

<script>
import orderList from '@/components/orderList'
import { getOrdersByUserId } from '@/api/order'

export default {
  layout: 'none',
  components: { orderList },
  async asyncData({ store, $axios, params }) {
    const index = params.id

    const userId = store.state.user.userInfo.id
    // TODO: 根据用户 id返回该用户的订单信息列表
    const { data: orders } = await getOrdersByUserId($axios, userId)

    return { userId, orders, index }
  },
  data() {
    return {
      active: 1,
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
  computed: {
    all() {
      const orders = this.orders
      return orders
    },
    wait2pay() {
      const orders = this.orders
      return orders.filter((order) => order.state === 0)
    },
    wait2deliver() {
      const orders = this.orders
      return orders.filter((order) => order.state === 1)
    },
    deliver() {
      const orders = this.orders
      return orders.filter((order) => order.state === 2)
    }
  },
  methods: {
    toPageOrder(orderId) {
      this.$router.push('/order/' + orderId)
    }
  }
}
</script>

<style scoped></style>
