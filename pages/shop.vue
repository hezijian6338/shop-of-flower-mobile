<template>
  <div>
    <div class="w-screen type">
      <div class="inline-block w-90 type-shop px-4">1</div>
      <div class="inline-block w-90 type-shop px-4">9</div>
      <div class="inline-block w-90 type-shop px-4">{{ ip }}</div>
    </div>
  </div>
</template>

<script>
// import { getUser } from '@/api/user'

export default {
  asyncData({ $axios }) {
    // const ip = await $axios.$get('http://icanhazip.com')
    // const ip = await getUser(5)
    const ip = 5
    // console.log(userId)
    return { ip }
  }
}
</script>

<style scoped>
.type {
  height: 90px;
}
.type-shop {
  height: 90px;
}
</style>
