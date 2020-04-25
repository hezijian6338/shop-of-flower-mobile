// import axios from 'axios'

export async function getCartById(axios, cartId) {
  const result = await axios.get('/cart/' + cartId)
  return result
}

export async function getCartsByUserId(axios, userId) {
  const result = await axios.get('/cart/list/user/' + userId)
  return result
}

export async function editCartById(axios, cartId) {
  const result = await axios.put('/cart/' + cartId)
  return result
}

export async function createCart(axios, cart) {
  const result = await axios.post('/cart', cart)
  return result
}

export async function deleteCartById(axios, cartId) {
  const result = await axios.delete('/cart' + cartId)
  return result
}
