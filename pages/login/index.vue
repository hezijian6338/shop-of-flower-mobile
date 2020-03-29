<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { login } from '../../api/user'

export default {
  data() {
    return {
      phone: String,
      password: String,
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
  computed: {
    ...mapActions({
      StateLogin: 'Login'
    }),
    ...mapGetters(['CurrentPhone', 'CurrentInfo'])
  },
  methods: {
    // TODO: 两种方式登陆
    login(phone, password) {
      // 先用 Vuex进行登录
      this.StateLogin({ phone, password })

      // 如果
      if (this.GetPhone === null) {
        const result = login({ phone, password })
        if (Reflect.has(result, 'code')) {
          // result.info 返回错误信息
        } else {
          this.userInfo = result
        }
      } else {
        // 登陆成功
      }
    }
  }
}
</script>
