# flower-shop

## pages (展示页面)
```
pages
├── README.md
├── cart (购物车)
│   ├── _id.vue (/cart/:id)
│   └── index.vue (/cart)
├── dis.vue (发现页面)
├── index.vue (首页 -- 没启用)
├── login (登陆页面)
│   └── index.vue (/login)
├── order (订单页面)
│   ├── _id.vue (/order/:id -- 订单详情)
│   └── _userId.vue (/order/:userId -- 用户订单列表)
├── pay (付款页面)
│   └── _ids.vue (/pay/:ids)
├── product (商品页面)
│   ├── _id.vue (/product/:id)
│   ├── index.vue (/product)
│   └── tag
│       └── _tagName.vue (/product/tag/:tagName -- 根据标签名字显示商品)
├── shop.vue (/shop -- 主页)
└── user (用户页面)
    ├── _id.vue (/user/:id)
    ├── info
    │   └── _id.vue (/user/info/:id)
    └── login.vue (/login)
```
## api
```
api (请求后台接口定义)
├── cart.js (购物车相关)
├── order.js (订单相关)
├── product.js (商品相关)
├── sku.js (商品规格相关)
├── tag.js (商品标签相关)
└── user.js (用户信息相关)
```
## components
```
components (中间件)
├── Logo.vue (登陆的组件 -- 我也忘记用来干嘛了)
├── README.md
├── orderList.vue (订单列表)
└── skuList.vue (商品规格列表)
```
## layouts
```
layouts
├── README.md
├── default.vue (默认全局布局)
└── none.vue (特殊页面使用空布局)
```
## store
```
store (vuex -- 全局状态管理器)
├── README.md
├── page.js (页面跳转判定 & 记录)
└── user.js (用户信息状态管理)
```
## plugins
```
plugins (插件注入)
├── README.md
├── axios.js (api请求组件)
└── vui.js (vant组件)
```
## utils
```
utils
└── ids.js (处理多 id的糅合和分割)
```
## other
```
static (静态文件)
├── README.md
└── favicon.ico (浏览器 tab栏左边的图标)
assets
├── README.md
├── css
│   └── tailwind.css (样式插件的css)
└── png (一些项目要用的 png)
    ├── cart.png
    ├── current.png
    ├── finish.png
    ├── flower1.png
    ├── flower2.png
    ├── flower3.png
    ├── index.png
    ├── info.png
    ├── limit1.png
    ├── locator.png
    ├── logo1.png
    ├── logo2.png
    ├── order.png
    ├── pay.png
    ├── service.png
    └── toCart.png
```
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
