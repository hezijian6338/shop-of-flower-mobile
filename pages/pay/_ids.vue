<template>
  <div>
    <div class="pay-content">
      <div class="product-info">
        <div v-for="order in orders" :key="order.id">
          <div class="info grid grid-cols-7 gap-2">
            <div class="info-photo col-span-2 text-center">
              <img v-if="order.photo !== undefined" :src="order.photo" />
              <img
                v-else
                src="http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg"
              />
            </div>
            <div
              class="main-info col-span-4 grid grid-rows-3 grid-flow-1 gap-1"
            >
              <div v-if="order.name !== undefined" class="title row-span-1">
                {{ order.name }}
              </div>
              <div v-else class="title row-span-1">挚爱-进口玫瑰</div>
              <div
                v-if="order.standard !== undefined"
                class="content row-span-2"
              >
                {{ order.standard }}
              </div>
              <div v-else class="content row-span-2">
                1个月4束，周一收花，品种自选
              </div>
            </div>
            <div
              class="price-info col-span-1 grid grid-rows-3 grid-flow-1 gap-1"
            >
              <div class="price row-span-1">¥399.00</div>
              <div class="number row-span-2">x1</div>
            </div>
          </div>
        </div>
        <div class="protocol grid grid-rows-3 grid-flow-col gap-2">
          <div class="pay-info grid grid-cols-5 gap-2">
            <div class="pay-type-title col-span-3">选择支付方式</div>
            <div class="pay-type col-span-2 text-right">微信付款</div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div class="col-span-4">匿名购买</div>
            <div class="col-span-1 flex items-center">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div class="col-span-4">
              同意《flowever用户协议》 ，已 知晓商品详情页提示信息
            </div>
            <div class="col-span-1 flex items-center">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4 absolute bottom-0 mb-2">
          <div class="pay-button col-start-2 col-span-2 text-center">
            付款
          </div>
          <div class="back col-start-7 col-span-2 text-center" @click="back">
            返回
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderById } from '../../api/order'
export default {
  async asyncData({ params, $axios }) {
    const ids = params.ids
    const orderIds = ids.trim().split(',')
    const orders = []
    for (const id of orderIds) {
      const { data: order } = await getOrderById($axios, id)
      orders.push(order)
    }

    return { orders }
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
      }
    }
  },
  methods: {
    back() {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
.product-info {
  margin: 0 auto;
  width: 307px;
  height: 159px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.info {
  margin: 0 auto;
  padding: 18px;
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

.protocol {
  margin: 19px auto;
  padding: 18px;
  width: 307px;
  height: 159px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.pay-info > .pay-type-title {
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.pay-info > .pay-type {
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(154, 149, 149, 1);
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 17px;
  width: 17px;
  left: 0px;
  bottom: 0px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f3adad;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f3adad;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.pay-button {
  width: 110px;
  height: 45px;
  line-height: 45px;
  background: rgba(243, 173, 173, 1);
  border-radius: 10px;
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}

.back {
  width: 110px;
  height: 45px;
  line-height: 45px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(135, 135, 135, 1);
}
</style>
