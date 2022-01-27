import { call, put, takeLatest,takeEvery } from 'redux-saga/effects'
import { getMessage, getMessages } from '../../api'
import { GET_MESSAGE, GET_MESSAGES } from '../actions/SupportActions'
import {
  setLoaded,
  setLoading,
  setMessage,
  setMessageLoaded,
  setMessageLoading,
  setMessages,
} from '../slices/supportSlice'

export function* getMessagesSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(getMessages)
    yield put(setMessages(response))
    yield put(setLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error)
    yield put(setLoaded())
  }
}

export function* getMessageSagaWorker(action) {
  yield put(setMessageLoading())
  try {
    const  config = {params: {}}
    const messageId = action.payload
    const response = yield call(getMessage,config,messageId)
    yield put(setMessage(response))
    yield put(setMessageLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error)
    yield put(setMessageLoaded())
  }
}

export function* getMessagesSagaWatcher() {
  yield takeLatest(GET_MESSAGES, getMessagesSagaWorker)
}
export function* getMessageSagaWatcher() {
  yield takeEvery(GET_MESSAGE, getMessageSagaWorker)
}