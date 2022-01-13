import { createSlice } from '@reduxjs/toolkit'
import { authInitialState } from '../initialState'

const authSlice = createSlice({
  name: 'profile',
  initialState: authInitialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.auth.token = action.payload.token
    },
  },
})
export const { setAuthToken } = authSlice.actions
export default authSlice.reducer
