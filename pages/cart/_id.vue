<template>
  <div></div>
</template>

<script>
import { getCartById, deleteCartById } from '../../api/cart'
import { createOrder } from '../../api/order'
export default {
  async asyncData({ $axios, params, store }) {
    const cartId = params.id
    // TODO: 页面加载前, 预先加载购物车的数据 (某一个详情)
    const cart = await getCartById($axios, cartId)
    return { cartId, cart }
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
      },
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
  },
  methods: {
    // TODO: 进行购物车信息下单
    addOrder(productId, skuId) {
      if (productId !== null && skuId !== null) {
        this.orderInfo.product_id = productId
        this.orderInfo.sku_id = skuId

        // 执行下单方法
        const { data } = createOrder(this.orderInfo)

        // 检查返回结果信息
        if (data.result) {
          // 返回订单 id
          // const orderId = data.id

          // TODO: 需要执行购物车信息删除
          this.delCart(this.cartInfo.id)
        } else {
          // 下单出错, 前端返回
        }
      } else {
        // 参数传递出错, 前端返回
      }
    },
    // TODO: 删除购物车的商品
    delCart(cartId) {
      if (cartId !== null) {
        const { code } = deleteCartById(cartId)
        if (code === 200) {
          // 删除成功
          this.$notify({
            type: 'danger',
            message: '删除成功~'
          })
        } else {
          // 删除错误
        }
      }
    }
  }
}
</script>
