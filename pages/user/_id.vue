<template>
  <div></div>
</template>

<script>
import { getUserById, editUserById } from '@/api/user'

export default {
  async asyncData({ params }) {
    const userId = params.id
    const user = await getUserById(userId)
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
      const result = await editUserById(userInfo)
      // 判断是否为状态码 500后的改编返回数据结构 { code: xxx, info: 'xxx' }
      if (Reflect.has(result, 'code')) {
        // result.info为执行出错的信息
      }
    }
  }
}
</script>
