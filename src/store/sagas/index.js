import { take, takeEvery } from 'redux-saga/effects'
export function* workerSaga() {
  console.log('click from saga')
}
export function* watchClickSaga() {
  yield take('CLICK')
  yield takeEvery('CLICK', workerSaga)
}
export default function* rootSaga() {
  yield watchClickSaga()
}
