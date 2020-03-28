import axios from 'axios'

export async function getSkuById(skuId) {
  const result = await axios.get('/sku/' + skuId)
  return result
}

export async function editSkuById(skuId) {
  const result = await axios.put('/sku/' + skuId)
  return result
}

export async function createSku(sku) {
  const result = await axios.post('/sku', { sku })
  return result
}

export async function deleteSkuById(skuId) {
  const result = await axios.delete('/sku' + skuId)
  return result
}
