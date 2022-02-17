import {
  ADD_MESSAGE_FILE,
  ADD_REPLY_FILE,
  GET_MESSAGE,
  GET_MESSAGES,
  SET_MESSAGE,
  SET_REPLY,
} from '../actions/SupportActions'
import {
  addMessage,
  addMessageFileRequest,
  addReplyFileRequest,
  getMessage,
  getMessages as getMessagesApi,
  setMessageReply,
} from '../../api'
import {
  addMessageFile,
  addReplyFile,
} from '../actionCreators/SupportActionCreator'
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
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

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
      console.log('setMessageReplySaga worker:', response)
      console.log('setMessageReplySaga action:', action)
      yield put(
        addReplyFile({
          replyID: response.data.id,
          files: action.payload.file,
        })
      )
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
      yield put(
        addMessageFile({
          messageID: response.data.id,
          files: action.payload.file,
        })
      )
      yield put(addNewMessage(response))
      yield put(setNewMessageLoaded())
    }
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error.response)
    yield put(setNewMessageLoaded())
  }
}

export function* addMessageFileSagaWorker(action) {
  try {
    const response = yield call(
      addMessageFileRequest,
      action.payload.messageID,
      action.payload.files
    )
    console.log('api file upload response', response)
    console.log('files is NOT SET')
  } catch (error) {
    //TODO нужно добавить обработку ошибок.вывод страницы ошибки если 502 или 404. переделать как на логине
    console.log('profile error: ', error.response)
    yield put(setNewMessageLoaded())
  }
}

export function* addReplyFileSagaWorker(action) {
  try {
    console.log('addReplyFileSagaWorker action:', action)
    const response = yield call(
      addReplyFileRequest,
      action.payload.replyID,
      action.payload.files
    )
    console.log('api file upload response', response)
    console.log('files is NOT SET')
    // const response = yield call(
    //   addMessageFileRequest,
    //   action.payload.messageID,
    //   action.payload.files
    // )
    // if (response.status === 200) {
    //   console.log('set message saga action:', action)
    //   console.log('set message saga response:', response)
    //   yield put(addNewMessage(response))
    //   yield put(setNewMessageLoaded())
    // }
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

export function* addMessageFileSagaWatcher() {
  yield takeEvery(ADD_MESSAGE_FILE, addMessageFileSagaWorker)
}
export function* addReplyFileSagaWatcher() {
  yield takeEvery(ADD_REPLY_FILE, addReplyFileSagaWorker)
}
