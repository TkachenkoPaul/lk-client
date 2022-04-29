import { GET_PROFILE, SET_CREDIT } from '../actions/ProfileActions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserRequest, setUserCreditRequest } from '../../api'
import {
  setCreditError,
  setLoaded,
  setLoading,
  setProfile,
} from '../slices/profileSlice'

import { setError } from '../slices/authSlice'

export function* getProfileSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(getUserRequest)
    yield put(setProfile(response))
    yield put(setLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404
    console.log('profile error: ', error.response)
    yield put(setError(error.response))
    yield put(setLoaded())
  }
}

export function* setCreditSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(setUserCreditRequest)
    yield put(setProfile(response))
    yield put(setLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404
    console.log('profile error: ', error.response)
    yield put(setCreditError(error.response))
    yield put(setLoaded())
  }
}

export function* setCreditSagaWatcher() {
  yield takeLatest(SET_CREDIT, setCreditSagaWorker)
}
export function* getUser() {
  yield takeLatest(GET_PROFILE, getProfileSagaWorker)
}
