import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserFeesRequest } from '../../api'
import { setLoaded, setLoading, setFees, setCredits } from '../slices/feesSlice'
import { GET_FEES } from '../actions/FeesAction'

export function* getFeesSagaWorker(action) {
  yield put(setLoading())
  try {
    const response = yield call(getUserFeesRequest,{params:{start:action.payload.start,end:action.payload.end}})
    console.log('fees saga action:',action)
    console.log('fees saga response:', response)
    yield put(setFees(response.data.fees))
    yield put(setCredits(response.data.credits))
    yield put(setLoaded())
  } catch (error) {
    console.log('profile error: ', error)
    yield put(setLoaded())
  }
}

export function* getFeesSagaWatcher() {
  yield takeLatest(GET_FEES, getFeesSagaWorker)
}