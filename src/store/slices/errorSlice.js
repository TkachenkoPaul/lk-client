import { createSlice } from '@reduxjs/toolkit'
import { errorsInitialState } from '../initialState'

const errorSlice = createSlice({
  name: 'errors',
  initialState: errorsInitialState,
  reducers: {
    isErrors: (state, action) => {
      state.isErrors = action.payload
    },
    setErrors: (state, action) => {
      state.errors = action.payload
      if (action.payload.status === 404) {
        state.errors.message = 'Нет ответа от сервера'
      }
    },
    clearErrors: state => {
      state.errors = null
    },
  },
})
export const { isErrors, setErrors, clearErrors } = errorSlice.actions
export default errorSlice.reducer
