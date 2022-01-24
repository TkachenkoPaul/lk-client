import { createSlice } from '@reduxjs/toolkit'
import { feesInitialState} from '../initialState'
import dayjs from 'dayjs'

const setFeesWithInfo = (fees) => {
  return fees.map(fee => {
    fee.key = fee.id
    fee.date = dayjs(fee.date).format('YYYY-MM-DD HH:mm:ss')
    return fee
  })
}
const feesSlice = createSlice({
  name: 'fees',
  initialState: feesInitialState,
  reducers: {
    setFees: (state, action) => {
      const test = setFeesWithInfo(action.payload)
      console.log('test',test)
      // state.data = action.payload
      state.data = test
    },
    setCredits: (state, action) => {
      state.data = action.payload
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
  },
})
export const { setFees,setCredits, setLoading, setLoaded } = feesSlice.actions
export default feesSlice.reducer