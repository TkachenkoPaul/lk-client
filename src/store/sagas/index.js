import {
  addMessageFileSagaWatcher,
  addReplyFileSagaWatcher,
  getMessageSagaWatcher,
  getMessagesSagaWatcher,
  setMessageReplySagaWatcher,
  setMessageSagaWatcher,
} from './getSupport'
import { all, call, spawn } from 'redux-saga/effects'
import { getUser, setCreditSagaWatcher } from './getProfile'

import { authUser } from './authUser'
import { getFeesSagaWatcher } from './getFees'
import { getPaymentsSagaWatcher } from './getPayments'

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
    addMessageFileSagaWatcher,
    addReplyFileSagaWatcher,
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
