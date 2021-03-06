import { login } from '~/api/user'

export const state = () => ({
  userInfo: {
    id: '',
    phone: '',
    password: '',
    name: '',
    role: 0,
    avatar: '',
    order_ids: '',
    cart_ids: '',
    created_date: '',
    updated_date: ''
  },
  token: ''
})

export const mutations = {
  SET_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_CARTIDS: (state, cartIds) => {
    state.userInfo.cart_ids = cartIds
  },
  SET_ORDERIDS: (state, orderIds) => {
    state.userInfo.order_ids = orderIds
  }
}

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
          avatar: state.userInfo.avatar,
          order_ids: state.userInfo.order_ids,
          cart_ids: state.userInfo.cart_ids
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
  async Login({ commit }, { phone, password }) {
    const result = await login(this.$axios, { phone, password })

    const { token, user } = result.data
    // console.log(token)

    await this.$axios.setHeader('Authorization', token)

    // state.userInfo = await { ...user }
    // state.token = await { ...token }
    await commit('SET_INFO', user)
  }
}
