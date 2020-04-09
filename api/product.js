// import axios from 'axios'

export async function getProductById(axios, productId) {
  const result = await axios.get('/product/' + productId)
  return result
}

export async function getProducts(axios) {
  const result = await axios.get('/product/list')
  return result
}

export async function editProductById(axios, productId) {
  const result = await axios.put('/product/' + productId)
  return result
}

export async function createProdcut(axios, product) {
  const result = await axios.post('/product', { product })
  return result
}

export async function deleteProductById(axios, productId) {
  const result = await axios.delete('/product' + productId)
  return result
}
