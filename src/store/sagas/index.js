import { takeEvery, put, call, spawn, all } from 'redux-saga/effects'
import {
  setStarShips,
  setStarShipsIsLoading,
  setStarShipsLoaded,
  setTotalCount,
} from '../slices/testSlice'
import axios from 'axios'
import { GET_AUTH_TOKEN } from '../actions/AuthActions'
//lk app api
const lkAPI = axios.create({
  withCredentials: true,
  baseURL: 'http://192.168.8.165:33335/api/v1/',
  headers: { 'Content-Type': 'application/json' },
})
export const authApi = {
  login(username, password) {
    return lkAPI.post('auth/login', {
      username: username,
      password: password,
    })
  },
}
async function getUserToken(username, password) {
  const response = await fetch('http://192.168.8.165:33335/api/v1/auth/login', {
    method: 'POST',
    headers: {
      Accept: '*/*',
      Connection: 'keep-alive',
      'User-Agent': 'PostmanRuntime/7.28.4',
    },
    body: JSON.stringify({ username: username, password: password }),
  })
  const content = await response.json()

  console.log(content)
}
//auth saga
export function* authUserSagaWorker(action) {
  // yield authApi
  //   .login(action.payload.username, action.payload.password)
  //   .then(function (response) {
  //     // handle success
  //     console.log('authApi response', response)
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log('authApi error ', error)
  //   })
  //   .then(function () {
  //     // always executed
  //     console.log('authApi always')
  //   })
  const response = yield call(getUserToken, ...[action.payload])
  console.log('api response:', response)
  console.log('authUserWorkerSaga:', action)
}

export function* authUser() {
  yield takeEvery(GET_AUTH_TOKEN, authUserSagaWorker)
}

// test saga

async function takeStarShips() {
  const response = await fetch('http://swapi.dev/api/starships')
  return await response.json()
}
async function api(pattern, page) {
  const response = await fetch(`https://swapi.dev/api/${pattern}?page=${page}`)
  return await response.json()
}
export function* workerSaga(action) {
  yield put(setStarShipsIsLoading())
  const starships = yield call(api, ...['starships', '1'])
  console.log(starships)
  console.log('action: ', action)
  yield put(setStarShips(starships.results))
  yield put(setTotalCount(starships.count))
  yield put(setStarShipsLoaded())
}
export function* watchClickSaga(action) {
  console.log('watcher payload', action)
  yield takeEvery('CLICK', workerSaga)
}
export function* loadStarshipsData(action) {
  yield takeEvery('LOAD_STARSHIPS_DATA', workerSaga)
}

export default function* rootSaga() {
  const sagas = [watchClickSaga, loadStarshipsData, authUser]
  const retrySagas = sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })
  yield all(retrySagas)
}
