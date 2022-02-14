import { call, spawn, all } from 'redux-saga/effects'
import { authUser } from './authUser'
import { getUser, setCreditSagaWatcher } from './getProfile'
import { getPaymentsSagaWatcher } from './getPayments'
import { getFeesSagaWatcher } from './getFees'
import {
  getMessageSagaWatcher,
  getMessagesSagaWatcher,
  setMessageReplySagaWatcher,
  setMessageSagaWatcher,
} from './getSupport'

export default function* rootSaga() {
  const sagas = [
    authUser,
    getUser,
    setCreditSagaWatcher,
    getPaymentsSagaWatcher,
    getFeesSagaWatcher,
    getMessagesSagaWatcher,
    getMessageSagaWatcher,
    setMessageReplySagaWatcher,
    setMessageSagaWatcher,
  ]
  const retrySagas = sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })
  yield all(retrySagas)
}
