import axios from 'axios'

const baseURL = 'https://test.rck-api.rck.su/api/v1/'

const api = axios.create({
  baseURL,
  withCredentials: true,
  // TODO добавить обработку ошибок по таймауту соединения
  timeout: 5000,
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
export async function getUserPaymentsRequest(config = {}) {
  return api.get('payments/me', config)
}

export async function getUserFeesRequest(config = {params:{start:'2016-01-01',end:'2022-01-01'}}){
  return api.get('fees',config)
}

export async function getMessages(config = {}) {
  return api.get('msgs', config)
}
export async function getMessage(config = {params:{text:''}},id= null) {
  return api.get(`msgs/${id}`, config)
}
export async function setMessageReply(text = '', msgID='') {
  // эти заголовки нужны из-за корсов, потом нужно разобраться
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  return api.post(`msgs/${msgID}/create_reply`, {text: text.text},config)
}
export default api
