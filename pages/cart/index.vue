<template>
  <div>
    <div class="main-contain overflow-y-scroll">
      <van-checkbox-group v-if="carts.length !== 0" v-model="result">
        <div
          v-for="cart in carts"
          :key="cart.id"
          class="info grid grid-cols-8 gap-2"
        >
          <div class="col-span-1 pt-10">
            <van-checkbox
              :name="cart"
              @click="price = cart.price + price"
            ></van-checkbox>
          </div>
          <div class="info-photo col-span-2 text-center">
            <img v-if="cart.photo !== undefined" :src="cart.photo" />
            <img
              v-else
              src="http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg"
            />
          </div>
          <div class="main-info col-span-3 grid grid-rows-3 grid-flow-1 gap-1">
            <div v-if="cart.name !== undefined" class="title row-span-1">
              {{ cart.name }}
            </div>
            <div v-else class="title row-span-1">挚爱-进口玫瑰</div>
            <div v-if="cart.standard !== undefined" class="content row-span-2">
              {{ cart.standard }}
            </div>
            <div v-else class="content row-span-2">
              1个月4束，周一收花，品种自选
            </div>
          </div>
          <div class="price-info col-span-1 grid grid-rows-3 grid-flow-1 gap-1">
            <div v-if="cart.price !== undefined" class="price row-span-1">
              ¥{{ cart.price }}
            </div>
            <div v-else class="price row-span-1">¥399.00</div>
            <div class="number row-span-2">x1</div>
          </div>
          <div class="col-span-1 pt-10" @click="delCart(cart.id)">
            <van-icon size="25" name="delete" />
          </div>
        </div>
      </van-checkbox-group>
      <div v-else class="info grid grid-cols-8 gap-2"></div>
    </div>
    <div class="pay-button text-center" @click="toBuy">
      <span>去支付 ¥{{ totalPrice }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCartsByUserId, deleteCartById } from '../../api/cart'
import { createOrder } from '@/api/order'
import { editUserById } from '@/api/user'
import { inject, pass } from '@/utils/ids'

export default {
  async asyncData({ $axios, params, store }) {
    const userId = store.state.user.userInfo.id

    const { data: carts } = await getCartsByUserId($axios, userId)

    // store.commit('user/SET_CARTIDS', carts)

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
      result: [],
      price: 0
    }
  },
  computed: {
    totalPrice() {
      let price = 0
      this.result.forEach((cart) => {
        price = cart.price + price
      })
      return price
    },
    ...mapGetters({
      getUserInfo: 'user/CurrentInfo'
    })
  },
  mounted() {
    const user = this.getUserInfo
    if (user === null) {
      this.$notify({
        type: 'danger',
        message: '用户没登陆, 请先登陆~'
      })
    }
  },
  methods: {
    // TODO: 购买 ==>> 添加订单 ==>> 付款页面
    async toBuy() {
      const user = this.getUserInfo
      if (user === null) {
        this.$notify({
          type: 'danger',
          message: '用户没登陆, 请先登陆~'
        })
      }

      // TODO: 处理订单信息
      let orderIds = []
      for (const cart of this.result) {
        this.orderInfo.product_id = cart.product_id
        this.orderInfo.sku_id = cart.sku_id
        const { data } = await createOrder(this.$axios, this.orderInfo)

        if (data.result) {
          orderIds.push(data.id)
        }
      }
      // 这里比较麻烦... 因为涉及到数组的判断, 和添加, 还有删除...√
      orderIds = inject(user.order_ids, orderIds).concat([])

      // TODO: 处理购物车
      const remove = []
      const origin = []
      for (const item of this.result) {
        remove.push(item.id)
        await this.delCart(item.id)
      }
      this.carts.forEach((item) => {
        origin.push(item.id)
      })
      const cartIds = pass(origin, remove)

      const newUser = {
        id: user.id,
        cart_ids: cartIds.toString(),
        order_ids: orderIds.toString()
      }

      const { code } = await editUserById(this.$axios, newUser)
      if (code === 200) {
        this.$store.commit('user/SET_CARTIDS', cartIds.toString())
        this.$store.commit('user/SET_ORDERIDS', orderIds.toString())
        this.$notify({
          type: 'success',
          message: '添加订单成功~',
          background: '#f3d7d5'
        })
        this.$router.push('/pay/' + orderIds.toString())
      }
    },
    async delCart(cartId) {
      const user = this.getUserInfo
      if (cartId !== null) {
        const { code } = await deleteCartById(this.$axios, cartId)
        if (code === 200) {
          this.$store.commit('user/SET_CARTIDS', pass(user.cart_ids, cartId))
          // 删除成功
          this.$notify({
            type: 'danger',
            message: '删除成功~'
          })
          const { data: carts } = await getCartsByUserId(this.$axios, user.id)
          this.carts = Object.assign({}, carts)
          return true
        } else {
          // 删除错误
          return false
        }
      }
    }
  }
}
</script>

<style scoped>
.main-contain {
  margin: 0 auto;
  width: 307px;
  height: 75vh;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.info {
  margin: 0 auto;
  padding: 10px 0;
  width: 90%;
}

.info-photo > img {
  width: 80px;
}

/* .main-info {
} */

.main-info > .title {
  line-height: 40px;
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}

.main-info > .content {
  /* width: 156px;
  height: 26px; */
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(154, 149, 149, 1);
}

.price-info > .price {
  line-height: 40px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.price-info > .number {
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(154, 149, 149, 1);
}

.pay-button {
  margin: 10px auto 0;
  width: 110px;
  height: 45px;
  line-height: 45px;
  background: rgba(243, 173, 173, 1);
  border-radius: 10px;
}

.pay-button > span {
  /* width: 44px; */
  /* height: 15px; */
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
</style>
