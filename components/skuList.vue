<template>
  <div>
    <div class="sku-contain">
      <div class="sku-title">
        <img src="http://photo.dragonsking.cn/2020/04/08/2e94a8fe9c771.jpg" />
        <span>¥399-4788</span>
      </div>
      <div class="sku-info">
        <span>规格</span>
        <div class="sku-list">
          <div
            :class="{ sku: choose !== 1, 'sku-choose': choose === 1 }"
            @click="chooseLabel(1)"
          >
            <span>1个月4束</span>
          </div>
          <div
            :class="{ sku: choose !== 2, 'sku-choose': choose === 2 }"
            @click="chooseLabel(2)"
          >
            <span>1个月4束</span>
          </div>
          <div
            :class="{ sku: choose !== 3, 'sku-choose': choose === 3 }"
            @click="chooseLabel(3)"
          >
            <span>1个月4束</span>
          </div>
          <div
            :class="{ sku: choose !== 4, 'sku-choose': choose === 4 }"
            @click="chooseLabel(4)"
          >
            <span>1个月4束</span>
          </div>
          <div
            :class="{ sku: choose !== 5, 'sku-choose': choose === 5 }"
            @click="chooseLabel(5)"
          >
            <span>1个月4束</span>
          </div>
        </div>
      </div>
      <div class="sku-confirm">
        <span>确认</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['skuList'],
  data() {
    return {
      choose: 1
    }
  },
  methods: {
    chooseLabel(label) {
      this.choose = label
    }
  }
}
</script>

<style scoped>
.sku-contain {
  /* min-height: calc(34vh - 15px); */
  margin: 0 auto;
  width: 288px;
  height: 375px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.sku-title {
  margin: 0 auto;
  padding-top: 37px;
  text-align: center;
  line-height: 100px;
  width: 60vw;
}

.sku-title > span {
  width: 91px;
  height: 15px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}

.sku-title > img {
  float: left;
  width: 68px;
}

.sku-info {
  margin: 10px auto 0;
  width: 60vw;
}

.sku-list {
  width: 60vw;
  height: 15vh;
}

.sku {
  margin-right: 20px;
  margin-bottom: 8px;
  width: 79px;
  height: 28px;
  float: left;
  line-height: 25px;
  text-align: center;
  background: rgba(232, 228, 228, 1);
}

.sku > span {
  width: 49px;
  height: 12px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(100, 100, 100, 1);
}

.sku-choose {
  margin-right: 20px;
  margin-bottom: 8px;
  width: 79px;
  height: 28px;
  float: left;
  line-height: 21px;
  text-align: center;
  background: rgba(247, 208, 208, 1);
  border: 2px solid rgba(242, 154, 154, 1);
}

.sku-choose > span {
  width: 49px;
  height: 12px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(238, 80, 80, 1);
}

.sku-confirm {
  margin: 20px auto;
  width: 164px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  background: rgba(243, 173, 173, 1);
  border-radius: 20px;
}

.sku-confirm > span {
  width: 32px;
  height: 15px;
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
</style>
