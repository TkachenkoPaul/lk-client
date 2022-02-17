import {
  ADD_MESSAGE_FILE,
  ADD_REPLY_FILE,
  GET_MESSAGE,
  GET_MESSAGES,
  SET_MESSAGE,
  SET_REPLY,
} from '../actions/SupportActions'

export const getMessages = () => {
  return { type: GET_MESSAGES }
}

export const getMessage = id => {
  return { type: GET_MESSAGE, payload: id }
}

export const setMessageReply = text => {
  return { type: SET_REPLY, payload: text }
}

export const setMessage = payload => {
  return { type: SET_MESSAGE, payload }
}

export const addMessageFile = payload => {
  return { type: ADD_MESSAGE_FILE, payload }
}
export const addReplyFile = payload => {
  return { type: ADD_REPLY_FILE, payload }
}
