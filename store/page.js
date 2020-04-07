export const state = () => ({
  pageIndex: '/shop'
})

export const getters = {
  getPageIndex(state) {
    return state.pageIndex === undefined ? null : state.pageIndex
  }
}

export const mutations = {
  toPage(state, page) {
    // console.log(page)
    state.pageIndex = page
  }
}
