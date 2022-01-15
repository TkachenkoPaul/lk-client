import { call, put, takeLatest } from 'redux-saga/effects'

import { authRequest } from '../../api'
import { GET_AUTH_TOKEN } from '../actions/AuthActions'

export function* getProfileSagaWorker(action) {
  console.log('we are in getProfileSagaWorker')
  console.log('saga action: ', action)
  yield put(setLoading())
  try {
    const response = yield call(
      authRequest,
      action.payload.username,
      action.payload.password
    )
    yield put(setAuth())
    yield put(setAuthToken(response))
    yield put(setLoaded())
  } catch (error) {
    yield put(setNotAuth())
    yield put(setError(error.response))
    yield put(setLoaded())
  }
}

export function* getUser() {
  yield takeLatest(GET_AUTH_TOKEN, getProfileSagaWorker)
}
