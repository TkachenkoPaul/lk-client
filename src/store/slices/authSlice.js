import { createSlice } from '@reduxjs/toolkit'
import { authInitialState } from '../initialState'

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth: state => {
      state.isAuth = true
      localStorage.setItem('isAuth', 'true')
    },
    setNotAuth: state => {
      state.isAuth = false
      localStorage.setItem('isAuth', 'false')
    },
    setAuthToken: (state, action) => {
      state.token = action.payload.data.access_token
      localStorage.setItem('isAuth', 'true')
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
    setError: (state, action) => {
      const status = action.payload.status
      if (status === 404) {
        state.error.message = 'Сервер не отвечает'
        state.error.code = status
      } else {
        state.error.message = action.payload.data.message
        state.error.code = action.payload.status
      }
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
