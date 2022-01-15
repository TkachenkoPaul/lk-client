import axios from 'axios'
const baseURL = 'https://test.rck-api.rck.su/api/v1/'
const api = axios.create({
  baseURL,
  withCredentials: true,
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

// export async function authRequest(username, password, config = {}) {
//   let data = new FormData()
//   data.set('username', username)
//   data.set('password', password)
//   await api
//     .post('auth/login', data, config)
//     .then(function (response) {
//       // handle success
//       return { status: 'success', response }
//     })
//     .catch(function (error) {
//       // handle error
//       return { status: 'error', response: error.response }
//     })
// }
export async function getUserRequest(config = {}) {
  return api.get('users/me', config)
}
export default api
