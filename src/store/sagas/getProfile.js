import { GET_PROFILE, SET_CREDIT } from '../actions/ProfileActions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserRequest, setUserCreditRequest } from '../../api'
import { isErrors, setErrors } from '../slices/errorSlice'
import {
  setCreditError,
  setLoaded,
  setLoading,
  setProfile,
} from '../slices/profileSlice'

export function* getProfileSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(getUserRequest)
    yield put(setProfile(response))
    yield put(setLoaded())
    yield put(isErrors(false))
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404
    console.log('profile error: ', error.response)
    yield put(setErrors(error.response))
    yield put(isErrors(true))
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
