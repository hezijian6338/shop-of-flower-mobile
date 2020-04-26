<template>
  <div>
    <div class="user-info">
      <div class="avatar-big"></div>
      <div class="username w-16">
        <p>Reeyoung</p>
      </div>
      <div class="user-option h-10">
        <div class="pay mr-10" @click="toPageInfo">
          <img src="~/assets/png/pay.png" />
        </div>
        <div class="service mr-10">
          <img src="~/assets/png/service.png" />
        </div>
        <div class="comment mr-10">
          <img src="~/assets/png/order.png" />
        </div>
        <div class="finish">
          <img src="~/assets/png/finish.png" />
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

    // console.log(store.state.user.token)

    // const token = store.state.user.token

    // console.log(token)

    // await $axios.setHeader('Authorization', token)

    // const user = await getUserById($axios, userId)

    const user = store.state.user.userInfo

    // console.log(user)

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
    toPageInfo() {
      this.$router.push('/user/info')
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
  width: 211px;
}

.user-option > div {
  display: inline-block;
  width: 19.5px;
  height: 19.5px;
}

.user-option > div > img {
  width: 19.5px;
  height: 19.5px;
}
</style>
