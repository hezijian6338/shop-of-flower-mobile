import { login } from '~/api/user'

export const state = () => ({
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
  },
  token: String
})

export const getters = {
  // TODO: 放回当前用户的电话号码
  CurrentPhone(state) {
    return state.userInfo === undefined ? null : { phone: state.userInfo.phone }
  },

  // TODO: 返回当前用户的基础信息
  CurrentInfo(state) {
    return state.userInfo === undefined
      ? null
      : {
          id: state.userInfo.id,
          phone: state.userInfo.phone,
          name: state.userInfo.name,
          role: state.userInfo.role,
          orderIds: state.userInfo.order_ids,
          cartIds: state.userInfo.cart_ids
        }
  },

  // TODO: 返回当前用户的用户角色信息
  CurrentRole(state) {
    return state.userInfo === undefined ? null : { role: state.userInfo.role }
  },

  Token(state) {
    return state.token === undefined ? null : state.token
  }
}

// TODO: 用户登录, 并且纪录登陆信息
export const actions = {
  async Login(state, { phone, password }) {
    const result = await login(this.$axios, { phone, password })

    const { token, user } = result.data
    // console.log(token)

    await this.$axios.setHeader('Authorization', token)

    state.userInfo = { ...user }
    state.token = { ...token }
  }
}
