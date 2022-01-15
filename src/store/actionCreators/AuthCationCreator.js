import { AUTH_USER, GET_AUTH_TOKEN } from '../actions/AuthActions'

export const doAuthUser = credentials => {
  return { type: AUTH_USER, payload: credentials }
}
export const doGetAuthToken = credentials => {
  return { type: GET_AUTH_TOKEN, payload: credentials }
}
