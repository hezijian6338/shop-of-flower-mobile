import axios from 'axios'

export async function getProductById(productId) {
  const result = await axios.get('/product/' + productId)
  return result
}

export async function getProducts() {
  const result = await axios.get('/product/list')
  return result
}

export async function editProductById(productId) {
  const result = await axios.put('/product/' + productId)
  return result
}

export async function createProdcut(product) {
  const result = await axios.post('/product', { product })
  return result
}

export async function deleteProductById(productId) {
  const result = await axios.delete('/product' + productId)
  return result
}
