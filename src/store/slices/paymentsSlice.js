import { createSlice } from '@reduxjs/toolkit'
import { paymentsInitialState } from '../initialState'

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: paymentsInitialState,
  reducers: {
    setPayments: (state, action) => {
      // state.data.push(action.payload.data)
      state.data = [action.payload.data]
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
  },
})
export const { setPayments, setLoading, setLoaded } = paymentsSlice.actions
export default paymentsSlice.reducer
