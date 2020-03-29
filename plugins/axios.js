/* eslint-disable no-console */
export default (app) => {
  const axios = app.$axios
  // 基本配置
  axios.defaults.timeout = 10000

  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'

  if (app.isDev) console.log('开发者模式')
  // this.$axios.setBaseURL('http://localhost:8888')

  // 返回回调
  axios.onResponse((res) => {
    console.log('原始数据信息: ' + res)
    if (res !== null) {
      const code = res.code
      if (code === 500) {
        return { code: 500, info: '执行错误' }
      }
      if (code === 200) {
        return res.data
      }
    }
    return res.data
  })

  // 请求回调
  axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      app.redirect('/400')
    }
  })
}

// export default function (app) {
//   let axios = app.$axios;
//   // 基本配置
//   axios.defaults.timeout = 10000
//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//   // 请求回调
//   axios.onRequest(config => { })

//   // 返回回调
//   axios.onResponse(res => { })

//   // 错误回调
//   axios.onError(error => { })
// }
