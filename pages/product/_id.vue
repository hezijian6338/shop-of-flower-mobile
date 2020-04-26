<template>
  <div>
    <div v-if="!showSku" class="product-info-contain relavite overflow-y-auto">
      <div class="info sticky top-0">
        <div class="main-info">
          <div class="info-title">
            <span v-if="product.name !== undefined">{{ product.name }}</span>
            <span v-else>挚爱·进口玫瑰（品种可自选）</span>
          </div>
          <div class="info-photo">
            <img v-if="product.photo !== undefined" :src="product.photo" />
            <img
              v-else
              src="http://photo.dragonsking.cn/2020/04/07/dfce095f4e02e.jpg"
            />
          </div>
          <div class="info-price">
            <span class="type">¥</span>
            <span class="price">{{ sku.price }}</span>
          </div>
        </div>
        <div class="info-brief">
          <span v-if="product.brief !== undefined">{{ product.brief }}</span>
          <span v-else>
            难以被世人所见的玫瑰品种 因其罕见、新奇而珍贵 天赋异禀的花材
            不仅带来震撼人心的观赏体验 更在无形之中提升观赏者的气质
          </span>
        </div>
      </div>
      <!-- <div class="content-info sticky top-0"></div> -->
      <div class="button">
        <div class="info-buy inline-block" @click="buy">
          <span>购买</span>
        </div>
        <img class="inline-block" src="~/assets/png/toCart.png" @click="cart" />
      </div>
    </div>
    <div v-if="showSku" class="sku">
      <skuList
        :sku-list="skus"
        @closeSku="close"
        @chooseSkuId="chooseSkuId"
      ></skuList>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getProductById } from '@/api/product'
import { getSkuById } from '@/api/sku'
import { createCart } from '@/api/cart'
import { createOrder } from '@/api/order'
import { editUserById } from '@/api/user'

import skuList from '@/components/skuList'

export default {
  layout: 'default',
  components: { skuList },
  // page component definitions
  async asyncData({ params, $axios }) {
    const productId = params.id
    const { data: product } = await getProductById($axios, productId)
    return { productId, product }
  },
  data() {
    return {
      showSku: false,
      productInfo: {
        id: String,
        product_id: String,
        name: String,
        brief: String,
        content: String,
        sku_ids: String,
        photo: String,
        created_date: Number,
        updated_date: Number
      },
      cartInfo: {
        id: '',
        product_id: '',
        name: '',
        sku_id: '',
        standard: '',
        price: 0,
        photo: '',
        created_date: 0,
        updated_date: 0
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
        created_date: Number,
        updated_date: Number
      },
      skus: [],
      sku: {},
      isCart: false
    }
  },
  computed: {
    ...mapGetters({
      getPageIndex: 'page/getPageIndex',
      getUserInfo: 'user/CurrentInfo'
    })
  },
  created() {
    this.getSku()
  },
  methods: {
    // TODO: 找到该商品的规格信息
    async getSku() {
      // TODO: 检查商品信息是否为空
      if (this.product !== null) {
        this.productInfo = Object.assign({}, this.product)

        // TODO: 检查商品规格是否为空
        if (this.productInfo.sku_ids !== null) {
          let skuIds = []

          // TODO: 分割规格为数组, 准备给页面构建
          skuIds = (this.productInfo.sku_ids || '').split(',')

          // 遍历 skuIds, 查询数据库
          for (const skuId of skuIds) {
            // 取出 sku信息
            const { data: sku } = await getSkuById(this.$axios, skuId)
            this.sku = sku
            // 判断 sku是否为空...
            if (sku !== null) {
              this.skus.push(sku)
            }
          }
        }
      }
    },
    // TODO: 把该商品添加到购物车
    async addCart(productId, skuId) {
      // 检查是否已经登录
      const user = this.getUserInfo
      if (user === null) {
        this.$notify({
          type: 'danger',
          message: '用户没登陆, 请先登陆~'
        })
      }

      // 检查传递的产品 id是否为空和产品规格选择 id是否为空
      if (productId !== null && skuId !== null && user !== null) {
        // TODO: 后端会根据这两个 id自动填充剩余信息, 所以其他字段不必继续存储
        this.cartInfo.product_id = productId
        this.cartInfo.sku_id = skuId

        const { data } = await createCart(this.$axios, this.cartInfo)
        if (data.result) {
          // 返回购物车的 id (或者用于页面跳转)
          const cartId = data.id

          // TODO: 判断购物车是否为空
          if (user.cart_ids != null) {
            const { cart_ids: cartIds, id } = user

            const ids = cartIds.trim().split(',')
            ids.push(cartId)
            const newUser = { id, cart_ids: ids.toString() }
            await editUserById(this.$axios, newUser).then((res) => {
              const { code } = res
              if (code === 200) {
                this.$notify({
                  type: 'primary',
                  message: '成功添加购物车',
                  background: '#f3d7d5'
                })
              }
            })
          } else {
            const { id } = user
            const newUser = { id, cart_ids: cartId }
            await editUserById(this.$axios, newUser).then((res) => {
              const { code } = res
              if (code === 200) {
                this.$notify({
                  type: 'primary',
                  message: '成功添加购物车',
                  background: '#f3d7d5'
                })
              }
            })
          }
        }
      } else {
        // 进行前端通知√
        this.$notify({
          type: 'danger',
          message: '添加购物车失败~'
        })
      }
    },
    // TODO: 把该商品添加到我的订单 (同时需要跳转页面到支付页面 (不打算做支付页面了, 功能复杂))
    async addOrder(productId, skuId) {
      const user = this.getUserInfo
      if (user === null) {
        this.$notify({
          type: 'danger',
          message: '用户没登陆, 请先登陆~'
        })
      }
      if (productId !== null && skuId !== null && user !== null) {
        this.orderInfo.product_id = productId
        this.orderInfo.sku_id = skuId

        const { data } = await createOrder(this.$axios, this.orderInfo)

        if (data.result) {
          // 返回订单 id (用于页面跳转)
          const orderId = data.id
          // TODO: 判断购物车是否为空
          if (user.order_ids != null) {
            const { order_ids: orderIds, id } = user

            const ids = orderIds.trim().split(',')
            ids.push(orderId)
            const newUser = { id, order_ids: ids.toString() }
            editUserById(this.$axios, newUser).then((res) => {
              const { code } = res
              if (code === 200) {
                this.$notify({
                  type: 'primary',
                  message: '创建订单成功',
                  background: '#f3d7d5'
                })
                const orderIds = []
                orderIds.push(orderId)
                this.$router.push('/pay/' + orderIds.toString())
              }
            })
          } else {
            const { id } = user
            const newUser = { id, order_ids: orderId }
            editUserById(this.$axios, newUser).then((res) => {
              const { code } = res
              if (code === 200) {
                this.$notify({
                  type: 'primary',
                  message: '创建订单成功',
                  background: '#f3d7d5'
                })
                const orderIds = []
                orderIds.push(orderId)
                this.$router.push('/pay/' + orderIds.toString())
              }
            })
          }
        } else {
          // 进行前端通知√
          this.$notify({
            type: 'danger',
            message: '下单失败~'
          })
        }
      }
    },
    buy() {
      this.showSku = !this.showSku
      this.isCart = false
    },
    cart() {
      this.showSku = !this.showSku
      this.isCart = true
    },
    chooseSkuId(skuId) {
      this.showSku = !this.showSku
      if (this.isCart) {
        this.addCart(this.productInfo.product_id, skuId)
      } else {
        this.addOrder(this.productInfo.product_id, skuId)
      }
    },
    close(state) {
      this.showSku = !state
    }
  }
}
</script>

<style scoped>
.product-info-contain {
  min-height: calc(84vh - 50px);
  height: 83.5vh;
}

.info {
  margin: 0 auto;
  width: 256px;
}

.main-info {
  margin: 0 auto;
  width: 256px;
  /* height: 304px; */
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.info-title {
  padding-top: 12px;
  text-align: center;
}

.info-title > span {
  width: 164px;
  height: 12px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(1, 1, 1, 1);
}

.info-photo {
  margin: 25px auto 0;
  width: 180px;
}

.info-price {
  margin-left: 65%;
  margin-top: 10px;
  padding-bottom: 10px;
}

.info-price > .type {
  width: 14px;
  height: 19px;
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(174, 200, 187, 1);
}

.info-price > .price {
  width: 30px;
  height: 15px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(1, 1, 1, 1);
}

.info-brief {
  margin: 30px auto 0;
}

.info-brief > span {
  width: 168px;
  height: 69px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(150, 156, 153, 1);
}

.button {
  margin: 30px auto 0;
  width: 77vw;
}

.info-buy {
  width: 256px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: rgba(243, 173, 173, 1);
  border-radius: 20px;
}

.info-buy > span {
  width: 26px;
  height: 11px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}

.button > img {
  width: 28px;
  height: 28px;
}

.content-info {
  margin: 40vh auto 0;
  width: 256px;
  height: 73vh;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.sku {
  margin: 10vh auto 0;
  width: 288px;
  /* height: 475px; */
  /* background: rgba(255, 255, 255, 1); */
  border-radius: 15px;
}
</style>
