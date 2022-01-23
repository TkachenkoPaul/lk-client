import { call, put, takeLatest } from 'redux-saga/effects'

import { getUserRequest } from '../../api'
import { setLoading, setLoaded, setProfile } from '../slices/profileSlice'
import { GET_PROFILE } from '../actions/ProfileActions'

export function* getProfileSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(getUserRequest)
    yield put(setProfile(response))
    yield put(setLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404
    console.log('profile error: ', error)
    yield put(setLoaded())
  }
}

export function* getUser() {
  yield takeLatest(GET_PROFILE, getProfileSagaWorker)
}
