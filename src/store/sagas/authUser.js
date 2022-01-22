import { call, put, takeLatest } from 'redux-saga/effects'
import {
  setAuthToken,
  setError,
  setLoaded,
  setLoading,
  setNotAuth,
} from '../slices/authSlice'
import { authRequest, getUserRequest } from '../../api'
import { GET_AUTH_TOKEN } from '../actions/AuthActions'
import { setProfile } from '../slices/profileSlice'

export function* authUserSagaWorker(action) {
  console.log('we are in authUserSagaWorker')
  console.log('saga action: ', action)
  yield put(setLoading())
  try {
    const response = yield call(
      authRequest,
      action.payload.username,
      action.payload.password
    )
    try {
      const user = yield call(getUserRequest)
      yield put(setProfile(user))
    } catch (error) {
      console.log('profile error: ', error.response)
    }
    yield put(setAuthToken(response))
    yield put(setLoaded())
  } catch (error) {
    console.log(error.response)
    yield put(setNotAuth())
    yield put(setError(error.response))
    yield put(setLoaded())
  }
}

export function* authUser() {
  yield takeLatest(GET_AUTH_TOKEN, authUserSagaWorker)
}
