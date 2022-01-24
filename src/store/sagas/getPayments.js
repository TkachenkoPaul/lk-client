import { call, put, takeLatest } from 'redux-saga/effects'

import { getUserPaymentsRequest } from '../../api'
import { GET_PAYMENTS } from '../actions/PaymentsActions'
import { setLoaded, setLoading, setPayments } from '../slices/paymentsSlice'

export function* getPaymentsSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(getUserPaymentsRequest)
    yield put(setPayments(response))
    yield put(setLoaded())
  } catch (error) {
    console.log('profile error: ', error)
    yield put(setLoaded())
  }
}

export function* getPaymentsSagaWatcher() {
  yield takeLatest(GET_PAYMENTS, getPaymentsSagaWorker)
}
