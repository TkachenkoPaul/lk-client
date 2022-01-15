import { createSlice } from '@reduxjs/toolkit'
import { authInitialState } from '../initialState'

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth: state => {
      state.isAuth = true
    },
    setNotAuth: state => {
      state.isAuth = false
    },
    setAuthToken: (state, action) => {
      state.token = action.payload.data.access_token
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
    setError: (state, action) => {
      state.error.message = action.payload.data.message
      state.error.code = action.payload.status
    },
  },
})
export const {
  setAuthToken,
  setLoaded,
  setLoading,
  setError,
  setAuth,
  setNotAuth,
} = authSlice.actions
export default authSlice.reducer
