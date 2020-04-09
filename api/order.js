// import axios from 'axios'

export async function getOrderById(axios, orderId) {
  const result = await axios.get('/order/' + orderId)
  return result
}

export async function getOrdersByUserId(axios, userId) {
  const result = await axios.get('/order/list/user/' + userId)
  return result
}

export async function editOrderById(axios, orderId) {
  const result = await axios.put('/order/' + orderId)
  return result
}

export async function createOrder(axios, order) {
  const result = await axios.post('/order', order)
  return result
}

export async function deleteOrderById(axios, orderId) {
  const result = await axios.delete('/order' + orderId)
  return result
}
