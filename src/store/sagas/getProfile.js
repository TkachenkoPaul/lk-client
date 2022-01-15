import { call, put, takeLatest } from 'redux-saga/effects'

import { getUserRequest } from '../../api'
import { setLoading, setLoaded, setProfile } from '../slices/profileSlice'
import { GET_PROFILE } from '../actions/ProfileActions'

export function* getProfileSagaWorker(action) {
  yield put(setLoading())
  try {
    const response = yield call(getUserRequest)
    yield put(setProfile(response))
    yield put(setLoaded())
  } catch (error) {
    console.log('profile error: ', error.response)
    yield put(setLoaded())
  }
}

export function* getUser() {
  yield takeLatest(GET_PROFILE, getProfileSagaWorker)
}
