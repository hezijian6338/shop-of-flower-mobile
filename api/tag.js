// import axios from 'axios'

export async function getTagList(axios) {
  const result = await axios.get('/tag/list')

  return result
}

export async function getProductListByTagName(axios, { tagName }) {
  const result = await axios.get('/tag/' + tagName + '/product')

  return result
}

export async function createTag(axios, { Tag }) {
  const result = await axios.post('/tag', Tag)

  return result
}

export async function editTag(axios, { Tag }) {
  const result = await axios.put('/tag/' + Tag.id, Tag)

  return result
}

export async function delTag(axios, { id }) {
  const result = await axios.delete('/tag/' + id)

  return result
}
