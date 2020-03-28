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
    async editUser() {
      const result = await editUserById(this.user)
    }
  }
}
</script>
