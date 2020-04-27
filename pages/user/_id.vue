<template>
  <div>
    <div class="user-info">
      <div class="avatar-big"></div>
      <div class="username w-16">
        <p>Reeyoung</p>
      </div>
      <div class="user-option h-10 text-center">
        <div class="pay mr-6" @click="toPageInfo(0)">
          <img class="object-contain" src="~/assets/png/pay.png" />
          <span>代付款</span>
        </div>
        <div class="service mr-6" @click="toPageInfo(1)">
          <img class="object-contain" src="~/assets/png/service.png" />
          <span>待发货</span>
        </div>
        <div class="comment mr-6" @click="toPageInfo(2)">
          <img class="object-contain" src="~/assets/png/order.png" />
          <span>已发货</span>
        </div>
        <div class="finish">
          <img class="object-contain" src="~/assets/png/finish.png" />
          <span>待评价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { editUserById } from '@/api/user'

export default {
  fetch({ store }) {
    store.dispatch('user/Login', {
      phone: '13160666721',
      password: '12345678'
    })
  },

  asyncData({ params, $axios, store }) {
    const userId = params.id

    const user = store.state.user.userInfo

    return { userId, user }
  },
  data() {
    return {
      userInfo: {
        id: String,
        phone: String,
        password: String,
        name: String,
        role: Number,
        order_ids: String,
        cart_ids: String,
        created_date: String,
        updated_date: String
      }
    }
  },
  methods: {
    async editUser(userInfo) {
      // FIXME: 服务端如果修改失败, 不返回数据, 只从返回的状态码判断
      const result = await editUserById(this.$axios, userInfo)
      // 判断是否为状态码 500后的改编返回数据结构 { code: xxx, info: 'xxx' }
      if (Reflect.has(result, 'code')) {
        // result.info为执行出错的信息
      }
    },
    toPageInfo(index) {
      this.$router.push('/user/info/' + index)
    }
  }
}
</script>

<style scoped>
.user-info {
  margin: 0 auto;
  width: 298px;
  height: 185px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

.avatar-big {
  margin: 0 auto 9px;
  width: 81px;
  height: 81px;
  border: rgba(255, 255, 255, 1);
}

.username {
  margin: 0 auto;
  text-align: center;
}

.username > p {
  width: 67px;
  height: 15px;
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.user-option {
  margin: 15px auto 0;
  width: 80vw;
}

.user-option > div {
  display: inline-block;
  /* width: 19.5px; */
  height: 19.5px;
}

.user-option > div > img {
  width: 100%;
  height: 19.5px;
}

.user-option > div > span {
  /* width: 35px; */
  /* height: 12px; */
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}
</style>
