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
export async function setUserCreditRequest(config = {}) {
  return api.get('users/credit', config)
}
export async function getUserPaymentsRequest(config = {}) {
  return api.get('payments/me', config)
}

export async function getUserFeesRequest(
  config = { params: { start: '2016-01-01', end: '2022-01-01' } }
) {
  return api.get('fees', config)
}

export async function getMessages(config = {}) {
  return api.get('msgs', config)
}
export async function getMessage(config = { params: { text: '' } }, id = null) {
  return api.get(`msgs/${id}`, config)
}
export async function setMessageReply(text = '', msgID = '') {
  // эти заголовки нужны из-за корсов, потом нужно разобраться
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return api.post(`msgs/${msgID}/create_reply`, { text: text.text }, config)
}
export async function addMessage(subject, message) {
  const body = {
    chapter: 4,
    message: message,
    subject: subject,
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return api.post(`msgs/create`, body, config)
}

export async function addMessageFileRequest(messageID, files) {
  const config = {
    headers: {
      Accept: '*/*',
      'Content-Type': 'multipart/form-data',
    },
  }
  if (Array.isArray(files)) {
    files.forEach(file => {
      let data = new FormData()
      data.append('file', file.originFileObj)
      return api.post(`msgs/${messageID}/upload_file`, data, config)
    })
  }
}

export async function addReplyFileRequest(replyID, files) {
  const config = {
    headers: {
      Accept: '*/*',
      'Content-Type': 'multipart/form-data',
    },
  }
  if (Array.isArray(files)) {
    files.forEach(file => {
      console.log('file is =>', file)
      let data = new FormData()
      console.log('file upload element', file)
      data.append('file', file.originFileObj)
      return api.post(`msgs/reply/${replyID}/upload_file`, data, config)
    })
  }
}

export default api
