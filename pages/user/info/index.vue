<template>
  <van-tabs v-model="active" color="#000000">
    <van-tab title="全部">
      <div class="contain-all">
        <div
          v-for="order in orders"
          :key="order.id"
          class="info grid grid-cols-8 gap-2"
        >
          <div class="col-span-1 pt-10">
            <van-checkbox :name="order"></van-checkbox>
          </div>
          <div class="info-photo col-span-2 text-center">
            <img v-if="order.photo !== undefined" :src="order.photo" />
            <img
              v-else
              src="http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg"
            />
          </div>
          <div class="main-info col-span-3 grid grid-rows-3 grid-flow-1 gap-1">
            <div v-if="order.name !== undefined" class="title row-span-1">
              {{ order.name }}
            </div>
            <div v-else class="title row-span-1">挚爱-进口玫瑰</div>
            <div v-if="order.standard !== undefined" class="content row-span-2">
              {{ order.standard }}
            </div>
            <div v-else class="content row-span-2">
              1个月4束，周一收花，品种自选
            </div>
          </div>
          <div class="price-info col-span-1 grid grid-rows-3 grid-flow-1 gap-1">
            <div v-if="order.price !== undefined" class="price row-span-1">
              ¥{{ order.price }}
            </div>
            <div v-else class="price row-span-1">¥399.00</div>
            <div class="number row-span-2">x1</div>
          </div>
          <div class="col-span-1 pt-10">
            <van-icon size="25" name="delete" />
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="待付款">内容 2</van-tab>
    <van-tab title="待发货">内容 3</van-tab>
    <van-tab title="已发货">内容 4</van-tab>
  </van-tabs>
</template>
<script>
import { getOrdersByUserId } from '@/api/order'

export default {
  layout: 'none',
  async asyncData({ store, $axios }) {
    const userId = store.state.user.userInfo.id
    // TODO: 根据用户 id返回该用户的订单信息列表
    const { data: orders } = await getOrdersByUserId($axios, userId)

    return { userId, orders }
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
  methods: {
    toPageOrder(orderId) {
      this.$router.push('/order/' + orderId)
    }
  }
}
</script>

<style scoped>
.contain-all {
  padding: 10px 0;
  width: 100%;
  height: 100vh;
  background: rgba(231, 233, 233, 1);
}

.info {
  margin: 10px auto;
  width: 350px;
  background: rgba(255, 255, 255, 1);
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
