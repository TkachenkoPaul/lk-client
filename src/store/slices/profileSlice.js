import { createSlice } from '@reduxjs/toolkit'
import { profileInitialState } from '../initialState'

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = { ...action.payload.data }
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
  },
})
export const { setProfile, setLoading, setLoaded } = profileSlice.actions
export default profileSlice.reducer
