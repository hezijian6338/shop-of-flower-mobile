import axios from 'axios'

export async function getUserById(userId) {
  const user = await axios.get('/user/' + userId)
  return user
}

export async function getUserByPhone(phone) {
  const user = await axios.get('/user/phone' + phone)
  return user
}

export async function createUser(User) {
  const result = await axios.post('/user', { user: User })
  return result
}

export async function login({ phone, password }) {
  const result = await axios.post('/user/login', {
    phone,
    password
  })
  return result
}

export async function editUserById(user) {
  const result = await axios.put('/user/' + user.id, { user })
  return result
}

export async function delUser(User) {
  const result = await axios.delete('/user/' + User.id, { user: User })
  return result
}
