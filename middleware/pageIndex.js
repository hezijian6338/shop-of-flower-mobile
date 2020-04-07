// import { store } from 'vuex'

export default function router({ route, store }) {
  store.commit('page/toPage', route.name)
  // console.log(store)
  console.log(route)
}
