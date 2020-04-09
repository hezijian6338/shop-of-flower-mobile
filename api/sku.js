// import axios from 'axios'

export async function getSkuById(axios, skuId) {
  const result = await axios.get('/sku/' + skuId)
  return result
}

export async function editSkuById(axios, skuId) {
  const result = await axios.put('/sku/' + skuId)
  return result
}

export async function createSku(axios, sku) {
  const result = await axios.post('/sku', sku)
  return result
}

export async function deleteSkuById(axios, skuId) {
  const result = await axios.delete('/sku' + skuId)
  return result
}
