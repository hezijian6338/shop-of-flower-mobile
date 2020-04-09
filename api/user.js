// import axios from 'axios'

export async function getUserById(axios, userId) {
  const user = await axios.get('/user/' + userId)
  return user
}

export async function getUserByPhone(axios, phone) {
  const user = await axios.get('/user/phone' + phone)
  return user
}

export async function createUser(axios, User) {
  const result = await axios.post('/user', User)
  return result
}

export async function login(axios, { phone, password }) {
  const result = await axios.post('/user/login', {
    phone,
    password
  })
  return result
}

export async function editUserById(axios, user) {
  const result = await axios.put('/user/' + user.id, user)
  return result
}

export async function delUser(axios, User) {
  const result = await axios.delete('/user/' + User.id, User)
  return result
}
