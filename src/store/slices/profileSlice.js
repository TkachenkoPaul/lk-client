import { createSlice } from '@reduxjs/toolkit'
import { profileInitialState } from '../initialState'

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = { ...action.payload.data }
    },
    setCreditModal: (state, action) => {
      console.log('state', state)
      console.log('setCreditModal', action.payload.isVisible)
      state.credit.isVisible = action.payload.isVisible
    },
    setCreditModalDisabled: state => {
      state.credit.disabled = true
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
    setCreditError: (state, action) => {
      console.log('serCreditError', action)
      state.credit.error = action.payload.data.errors.credit
    },
  },
})
export const {
  setProfile,
  setLoading,
  setLoaded,
  setCreditError,
  setCreditModal,
  setCreditModalDisabled,
} = profileSlice.actions
export default profileSlice.reducer
