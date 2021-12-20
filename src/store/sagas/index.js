import { takeEvery, put } from 'redux-saga/effects'
import { setStarShips } from '../slices/profileSlice'
async function takeStarShips() {
  const response = await fetch('http://swapi.dev/api/starships')
  return await response.json()
}

export function* workerSaga() {
  const data = yield takeStarShips()
  yield put(setStarShips(data.results))
}
export function* watchClickSaga() {
  yield takeEvery('CLICK', workerSaga)
}
export default function* rootSaga() {
  yield watchClickSaga()
}
