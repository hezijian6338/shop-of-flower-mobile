<template>
  <div>
    <div class="pay-content">
      <div class="product-info">
        <!-- <div class="info-photo">
          <img src="http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg" />
        </div> -->
        <div class="info grid grid-cols-7 gap-2">
          <div class="info-photo col-span-2 text-center">
            <img
              src="http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg"
            />
          </div>
          <div class="main-info col-span-4 grid grid-rows-3 grid-flow-1 gap-1">
            <div class="title row-span-1">挚爱-进口玫瑰</div>
            <div class="content row-span-2">1个月4束，周一收花，品种自选</div>
          </div>
          <div class="price-info col-span-1 grid grid-rows-3 grid-flow-1 gap-1">
            <div class="price row-span-1">¥399.00</div>
            <div class="number row-span-2">x1</div>
          </div>
        </div>
        <div class="protocol grid grid-rows-3 grid-flow-col gap-2">
          <div class="pay-info grid grid-cols-5 gap-2">
            <div class="pay-type-title col-span-3">选择支付方式</div>
            <div class="pay-type col-span-2 text-right">微信付款</div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div class="col-span-4">匿名购买</div>
            <div class="col-span-1 flex items-center">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div class="col-span-4">
              同意《flowever用户协议》 ，已 知晓商品详情页提示信息
            </div>
            <div class="col-span-1 flex items-center">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return { orderId: params.id }
  }
}
</script>

<style scoped>
.product-info {
  margin: 0 auto;
  width: 307px;
  height: 159px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.info {
  margin: 0 auto;
  padding: 18px;
}

.info-photo > img {
  width: 80px;
}

/* .main-info {
} */

.main-info > .title {
  line-height: 40px;
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}

.main-info > .content {
  /* width: 156px;
  height: 26px; */
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(154, 149, 149, 1);
}

.price-info > .price {
  line-height: 40px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.price-info > .number {
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(154, 149, 149, 1);
}

.protocol {
  margin: 19px auto;
  padding: 18px;
  width: 307px;
  height: 159px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.pay-info > .pay-type-title {
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}

.pay-info > .pay-type {
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(154, 149, 149, 1);
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 17px;
  width: 17px;
  left: 0px;
  bottom: 0px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f3adad;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f3adad;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
