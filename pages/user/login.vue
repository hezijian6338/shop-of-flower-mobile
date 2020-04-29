<template>
  <div class="main">
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="电话"
        placeholder="电话"
        :rules="[{ require: true, message: '请填写电话号码~' }]"
      />
      <van-field
        v-model="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ require: true, message: '请填写密码~' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          color="rgba(243, 173, 173, 1)"
          native-type="submit"
          >登陆</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'none',
  data() {
    return {
      phone: '13160666721',
      password: '12345678'
    }
  },
  computed: {
    ...mapGetters({
      getUserInfo: 'user/CurrentInfo'
    })
  },
  methods: {
    async onSubmit(values) {
      // console.log('submit', values)
      await this.$store.dispatch('user/Login', values)
      // console.log(this.getUserInfo)

      const user = this.getUserInfo
      if (user) {
        this.$router.push('/shop')
      }
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 29vh;
}
</style>
