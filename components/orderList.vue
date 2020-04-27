<template>
  <div class="contain-all overflow-scroll">
    <!-- <van-checkbox-group v-model="result"> -->
    <div
      v-for="order in orders"
      :key="order.id"
      class="info grid grid-cols-7 gap-2"
    >
      <!-- <div class="col-span-1 pt-12 pl-3">
          <van-checkbox :name="order"></van-checkbox>
        </div> -->
      <div class="info-photo col-span-2 text-center px-2">
        <img
          v-if="order.photo !== undefined"
          class="object-contain h-full w-full"
          :src="order.photo"
        />
        <img
          v-else
          class="object-contain h-full w-full"
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
      <div class="price-info col-span-2 grid grid-rows-3 grid-flow-1 gap-1">
        <div v-if="order.price !== undefined" class="price row-span-1">
          ¥{{ order.price }}
        </div>
        <div v-else class="price row-span-1">¥399.00</div>
        <div class="number row-span-1">x1</div>
        <div class="row-span-1 h-full w-16 text-center">
          <div class="tag-button">
            {{ tagButton(order.state) }}
          </div>
        </div>
      </div>
      <!-- <div class="col-span-1 pt-10">
        <van-icon size="25" name="delete" />
      </div> -->
    </div>
    <!-- </van-checkbox-group> -->
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      result: []
    }
  },
  computed: {
    tagButton() {
      return function(state) {
        if (state === 0) {
          return '付款'
        }
        if (state === 1) {
          return '催促发货'
        }
        if (state === 2) {
          return '确认'
        }
      }
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

/* .info-photo > img { */
/* width: 80px; */
/* } */

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

.tag-button {
  font-family: Adobe Heiti Std;
  font-weight: normal;
  font-size: 12px;
  color: rgba(154, 149, 149, 1);
  border: 1px solid rgba(154, 149, 149, 1);
  border-radius: 10px;
}
</style>
