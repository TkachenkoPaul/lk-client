import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  addMessage,
  getMessage,
  getMessages as getMessagesApi,
  setMessageReply,
} from '../../api'
import {
  GET_MESSAGE,
  GET_MESSAGES,
  SET_MESSAGE,
  SET_REPLY,
} from '../actions/SupportActions'

import {
  addNewMessage,
  setLoaded,
  setLoading,
  setMessage,
  setMessageLoaded,
  setMessageLoading,
  setMessages,
  setNewMessageLoaded,
  setNewMessageLoading,
  setReply,
} from '../slices/supportSlice'

export function* getMessagesSagaWorker() {
  yield put(setLoading())
  try {
    const response = yield call(getMessagesApi)
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
    const config = { params: {} }
    const messageId = action.payload
    const response = yield call(getMessage, config, messageId)
    yield put(setMessage(response))
    yield put(setMessageLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error)
    yield put(setMessageLoaded())
  }
}

export function* setMessageReplySagaWorker(action) {
  yield put(setMessageLoading())
  try {
    const response = yield call(
      setMessageReply,
      { text: action.payload.text },
      action.payload.msgId
    )
    if (response.status === 200) {
      yield put(setReply(response))
    }
    console.log('message reply', response)
    yield put(setMessageLoaded())
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error)
    yield put(setMessageLoaded())
  }
}

export function* setMessageSagaWorker(action) {
  yield put(setNewMessageLoading())
  try {
    const response = yield call(
      addMessage,
      action.payload.subject,
      action.payload.message
    )
    if (response.status === 200) {
      yield put(addNewMessage(response))
      yield put(setNewMessageLoaded())
    }
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error.response)
    yield put(setNewMessageLoaded())
  }
}

export function* getMessagesSagaWatcher() {
  yield takeLatest(GET_MESSAGES, getMessagesSagaWorker)
}
export function* getMessageSagaWatcher() {
  yield takeEvery(GET_MESSAGE, getMessageSagaWorker)
}

export function* setMessageReplySagaWatcher() {
  yield takeEvery(SET_REPLY, setMessageReplySagaWorker)
}

export function* setMessageSagaWatcher() {
  yield takeEvery(SET_MESSAGE, setMessageSagaWorker)
}
