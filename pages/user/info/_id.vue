<template>
  <van-tabs v-model="active" color="#000000">
    <van-tab title="全部">内容 1</van-tab>
    <van-tab title="待付款">内容 2</van-tab>
    <van-tab title="待发货">内容 3</van-tab>
    <van-tab title="已发货">内容 4</van-tab>
  </van-tabs>
</template>
<script>
export default {
  layout: 'none',
  data() {
    return { active: 2 }
  }
}
</script>
