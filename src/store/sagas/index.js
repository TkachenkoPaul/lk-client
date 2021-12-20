import { takeEvery, put, call, spawn, all } from 'redux-saga/effects'
import {
  setStarShips,
  setStarShipsIsLoading,
  setStarShipsLoaded,
  setTotalCount,
} from '../slices/testSlice'
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
  const sagas = [watchClickSaga, loadStarshipsData]
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