import { createSlice } from '@reduxjs/toolkit'
import { supportInitialState } from '../initialState'
const IS_LOADING = 'IS_LOADING'
const initialState = {
  messages: [],
  isLoading: true,
}

const supportSlice = createSlice({
  name: 'support ',
  initialState: supportInitialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
    setMessages: (state, action) => {
      state.messages= action.payload.data.map(message =>{
        message.key = message.id
        return message
      })
    },
  },
})
export const { setLoading, setLoaded, setMessages } =
  supportSlice.actions
export const selectIsLoading = state => state.isLoading
export const selectMessages = state => state.messages
export default supportSlice.reducer
