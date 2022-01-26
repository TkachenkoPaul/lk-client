import { call, put, takeLatest } from 'redux-saga/effects'
import { getMessages } from '../../api'
import { GET_MESSAGES } from '../actions/SupportActions'
import { setLoaded, setLoading, setMessages } from '../slices/supportSlice'

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

export function* getMessagesSagaWatcher() {
  yield takeLatest(GET_MESSAGES, getMessagesSagaWorker)
}
