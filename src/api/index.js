import axios from 'axios'

const baseURL = 'https://test.rck-api.rck.su/api/v1/'

const api = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 2000,
})

export async function authRequest(username, password) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  let data = new FormData()
  data.set('username', username)
  data.set('password', password)
  return api.post('auth/login', data, config)
}

export async function getUserRequest(config = {}) {
  return api.get('users/me', config)
}

export default api
