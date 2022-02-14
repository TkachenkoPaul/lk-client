import { GET_PROFILE, SET_CREDIT } from '../actions/ProfileActions'

export const getProfile = () => {
  return { type: GET_PROFILE }
}
export const setCredit = () => {
  return { type: SET_CREDIT }
}
