<template>
  <div>
    <div class="grid grid-cols-3 gap-1">
      <div class="col-span-4 iphonex:col-span-2 iphone6p:col-span-1">1</div>
      <div class="col-span-4 iphonex:col-span-1 iphone6p:col-span-1">9</div>
      <div class="col-span-4 iphonex:col-span-1 iphone6p:col-span-1">7</div>
    </div>
    <div class="container mx-auto">{{ product_id }}</div>
    <div
      class="box-border iphone6p:h-20 iphonex:h-100 w-32 p-4 border-4 border-gray-400 bg-gray-200"
    >
      <div class="h-full w-full bg-gray-400"></div>
    </div>
  </div>
</template>

<script>
import { getProductById } from '@/api/product'
import { getSkuById } from '@/api/sku'
import { createCart } from '@/api/cart'
import { createOrder } from '@/api/order'

export default {
  layout: 'default',
  // page component definitions
  async asyncData({ params }) {
    const productId = params.id
    const product = await getProductById(productId)
    return { productId, product }
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
      },
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
      },
      skus: Array
    }
  },
  mounted() {
    this.getSku()
  },
  methods: {
    // TODO: 找到该商品的规格信息
    getSku() {
      // TODO: 检查商品信息是否为空
      if (this.product !== null) {
        this.productInfo = Object.assign({}, this.product)

        // TODO: 检查商品规格是否为空
        if (this.productInfo.sku_ids !== null) {
          // TODO: 分割规格为数组, 准备给页面构建
          const skuIds = this.productInfo.sku_ids.split(',')

          // 遍历 skuIds, 查询数据库
          skuIds.array.forEach(async (skuId) => {
            // 取出 sku信息
            const sku = await getSkuById(skuId)
            // 判断 sku是否为空...
            if (sku !== null) {
              this.skus.push(sku)
            }
          })
        }
      }
    },
    // TODO: 把该商品添加到购物车
    addCart(productId, skuId) {
      // TODO: 检查传递的产品 id是否为空和产品规格选择 id是否为空
      if (productId !== null && skuId !== null) {
        // TODO: 后端会根据这两个 id自动填充剩余信息, 所以其他字段不必继续存储
        this.cartInfo.product_id = productId
        this.cartInfo.sku_id = skuId

        const result = createCart(this.cartInfo)
        if (result.result) {
          // 返回购物车的 id (或者用于页面跳转)
          // const cartId = result.id
        }
      } else {
        // FIXME: 进行前端通知
      }
    },
    // TODO: 把该商品添加到我的订单 (同时需要跳转页面到支付页面 (不打算做支付页面了, 功能复杂))
    addOrder(productId, skuId) {
      if (productId !== null && skuId !== null) {
        this.orderInfo.product_id = productId
        this.orderInfo.sku_id = skuId

        const result = createOrder(this.orderInfo)
        if (result.result) {
          // 返回订单 id (用于页面跳转)
          // const orderId = result.id
        } else {
          // FIXME: 进行前端通知
        }
      }
    }
  }
}
</script>
