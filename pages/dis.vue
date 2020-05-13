<template>
  <div>
    <div class="moment grid grid-cols-2">
      <div class="col-span-1 grid grid-rows-8">
        <span class="title text-center row-span-2 row-start-2">社区</span>
        <span class="brief text-center row-span-2 row-start-4">参与讨论</span>
        <span class="text-center row-span-2 row-start-6">立即查看</span>
      </div>
      <div class="col-span-1"></div>
    </div>
    <div class="procted grid grid-cols-2">
      <div class="col-span-1 grid grid-rows-8"></div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.moment {
  margin: 91px auto 0;
  width: 275px;
  height: 148px;
  background: #f2e6c1;
  border-radius: 10px;
}

.procted {
  margin: 45px auto 0;
  width: 275px;
  height: 148px;
  background: #d2e1f0;
  border-radius: 10px;
}

.title {
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.brief {
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(124, 122, 122, 1);
}
</style>
