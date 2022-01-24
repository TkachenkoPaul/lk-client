import { GET_FEES } from '../actions/FeesAction'

export const getFees = (start,end) => {
  return { type: GET_FEES, payload: {start: start,end:end} }
}
