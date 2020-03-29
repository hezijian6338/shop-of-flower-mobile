<template>
  <div></div>
</template>

<script>
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
  methods: {
    login(phone, password) {
      const result = login({ phone, password })
      if (Reflect.has(result, 'code')) {
        // result.info 返回错误信息
      } else {
        this.userInfo = result
      }
    }
  }
}
</script>
