import { GET_MESSAGE, GET_MESSAGES } from '../actions/SupportActions'

export const getMessages = () => {
  return {type:GET_MESSAGES}
}

export const getMessage = (id) => {
  return {type:GET_MESSAGE, payload : id}
}