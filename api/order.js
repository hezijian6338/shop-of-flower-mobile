import axios from 'axios'

export async function getOrderById(orderId) {
  const result = await axios.get('/order/' + orderId)
  return result
}

export async function getOrders(userId) {
  const result = await axios.get('/order/list/user/' + userId)
  return result
}

export async function editOrderById(orderId) {
  const result = await axios.put('/order/' + orderId)
  return result
}

export async function createOrder(order) {
  const result = await axios.post('/order', { order })
  return result
}

export async function deleteOrderById(orderId) {
  const result = await axios.delete('/order' + orderId)
  return result
}
