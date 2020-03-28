import axios from 'axios'

export async function getCartById(cartId) {
  const result = await axios.get('/cart/' + cartId)
  return result
}

export async function getCartsByUserId(userId) {
  const result = await axios.get('/cart/list/user/' + userId)
  return result
}

export async function editCartById(cartId) {
  const result = await axios.put('/cart/' + cartId)
  return result
}

export async function createCart(cart) {
  const result = await axios.post('/cart', { cart })
  return result
}

export async function deleteCartById(cartId) {
  const result = await axios.delete('/cart' + cartId)
  return result
}
