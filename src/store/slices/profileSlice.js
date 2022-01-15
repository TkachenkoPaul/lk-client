import { createSlice } from '@reduxjs/toolkit'
import { profileInitialState } from '../initialState'

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile.push(...action.payload)
    },
    setLoading: state => (state.isLoading = true),
    setLoaded: state => (state.isLoading = false),
  },
})
export const { setProfile } = profileSlice.actions
export default profileSlice.reducer
