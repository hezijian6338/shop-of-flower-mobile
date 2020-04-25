<template>
  <div>
    <div class="main-contain">
      <div
        v-for="cart in carts"
        :key="cart.id"
        class="info grid grid-cols-7 gap-2"
      >
        <div class="info-photo col-span-2 text-center">
          <img v-if="cart.photo !== undefined" :src="cart.photo" />
          <img
            v-else
            src="http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg"
          />
        </div>
        <div class="main-info col-span-4 grid grid-rows-3 grid-flow-1 gap-1">
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
      </div>
    </div>
  </div>
</template>

<script>
import { getCartsByUserId } from '../../api/cart'

export default {
  async asyncData({ $axios, params, store }) {
    // const userId = params.userId
    const userId = store.state.user.userInfo.id

    console.log(userId)

    const { data: carts } = await getCartsByUserId($axios, userId)

    console.log(carts)

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
</style>
